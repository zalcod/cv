'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' }
    ];

    const currentLocale = pathname.split('/')[1];
    const active = languages.find((l) => l.code === currentLocale) ?? languages[0];

    const handleLanguageChange = (localeCode: string) => {
        try {
            // Eğer geçerli bir dil kodu varsa, o dil kodunu yeni dil koduyla değiştir
            if (['tr', 'en', 'ar'].includes(currentLocale)) {
                const newPath = pathname.replace(`/${currentLocale}`, `/${localeCode}`);
                router.push(newPath);
            } else {
                // Eğer geçerli bir dil kodu yoksa, yeni dil koduyla başlayan bir yola git
                router.push(`/${localeCode}`);
            }
        } catch (error) {
            console.error('Dil değiştirme hatası:', error);
            // Sorun varsa, yeni dil koduyla ana sayfaya yönlendir
            router.push(`/${localeCode}`);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-2 rounded-md bg-transparent border border-primary/20 hover:border-primary/40"
                >
                    <span className="text-base leading-none mr-1">{active.flag}</span>
                    <span className="text-xs font-medium">{active.code.toUpperCase()}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="cursor-pointer"
                    >
                        <span className="mr-2">{lang.flag}</span>
                        <span>{lang.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
} 