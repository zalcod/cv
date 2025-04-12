'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "lucide-react";

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'tr', name: 'Türkçe' },
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' }
    ];

    const handleLanguageChange = (localeCode: string) => {
        try {
            const currentLocale = pathname.split('/')[1];
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
                <Button variant="ghost" size="icon">
                    <GlobeIcon className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="cursor-pointer"
                    >
                        {lang.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
} 