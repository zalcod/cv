'use client';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Download, FileText, Link as LinkIcon, Search, Home } from "lucide-react";
import { RESUME_DATA_AR, RESUME_DATA_EN, RESUME_DATA_TR } from "@/data/resume-data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export function CommandMenu({ showDesktopTrigger = true }: { showDesktopTrigger?: boolean } = {}) {
    const t = useTranslations();
    const router = useRouter();
    const { locale } = useParams();
    const [html2pdf, setHtml2pdf] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [isMac, setIsMac] = useState(typeof window !== 'undefined' ? navigator.userAgent.indexOf('Mac') !== -1 : false);
    const [isMobile, setIsMobile] = useState(false);
    const resumeData =
        locale === "en" ? RESUME_DATA_EN : locale === "ar" ? RESUME_DATA_AR : RESUME_DATA_TR;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // html2pdf modülünü default export olarak yükle
            import('html2pdf.js').then((module) => {
                setHtml2pdf(() => module.default);
            });
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        }
    }, []);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "j" || e.key === "J") && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        if (!isMobile) {
            document.addEventListener("keydown", down);
            return () => document.removeEventListener("keydown", down);
        }
    }, [isMobile]);

    const downloadPDF = async () => {
        if (!html2pdf) return;

        const element = document.querySelector('main, motion.main');
        if (!element) return;

        try {
            // Enhanced PDF settings
            const opt = {
                margin: [15, 15, 15, 15],
                filename: `${resumeData.name} - CV.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    letterRendering: true,
                    backgroundColor: '#ffffff'
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    putOnlyUsedFonts: true
                }
            };

            // html2pdf artık bir fonksiyon olarak kullanılıyor
            await html2pdf(element, opt);
        } catch (error) {
            console.error('PDF oluşturma hatası:', error);
        }
    };

    const openLink = (url: string) => {
        if (typeof window !== 'undefined') {
            window.open(url, '_blank');
        }
    };

    const goTo = (path: string) => {
        setOpen(false);
        router.push(path);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        id="command-menu-trigger"
                        variant="outline"
                        size="icon"
                        className={
                            showDesktopTrigger
                                ? "sr-only md:not-sr-only md:flex h-9 w-9 bg-transparent border border-primary/20 hover:border-primary/40 hover:bg-muted/40"
                                : "sr-only h-9 w-9"
                        }
                    >
                        <Search className="h-5 w-5" />
                        <span className="sr-only">{t('commands.title')}</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>{t('commands.title')}</DialogTitle>
                    </DialogHeader>
                    <Command className="border-none">
                        <CommandInput placeholder={t('commands.search')} />
                        <CommandList>
                            <CommandEmpty>{t('commands.noResults')}</CommandEmpty>
                            <CommandGroup heading={t('commands.actions')}>
                                <CommandItem onSelect={() => goTo(`/${typeof locale === "string" ? locale : "tr"}`)}>
                                    <Home className="mr-2 h-4 w-4" />
                                    <span>Ana Sayfa</span>
                                </CommandItem>
                                <CommandItem onSelect={() => goTo(`/${typeof locale === "string" ? locale : "tr"}/cv`)}>
                                    <FileText className="mr-2 h-4 w-4" />
                                    <span>CV</span>
                                </CommandItem>
                                <CommandItem onSelect={downloadPDF}>
                                    <Download className="mr-2 h-4 w-4" />
                                    <span>{t('commands.downloadCV')}</span>
                                </CommandItem>
                                <CommandItem onSelect={() => typeof window !== 'undefined' && window.print()}>
                                    <FileText className="mr-2 h-4 w-4" />
                                    <span>{t('commands.printCV')}</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading={t('commands.links')}>
                                {resumeData.contact.social.map((social) => (
                                    <CommandItem
                                        key={social.name}
                                        onSelect={() => openLink(social.url)}
                                    >
                                        <LinkIcon className="mr-2 h-4 w-4" />
                                        <span>{social.name}</span>
                                    </CommandItem>
                                ))}
                                {resumeData.projects.map((project) => (
                                    project.link && (
                                        <CommandItem
                                            key={project.title}
                                            onSelect={() => openLink(project.link.href)}
                                        >
                                            <LinkIcon className="mr-2 h-4 w-4" />
                                            <span>{project.title}</span>
                                        </CommandItem>
                                    )
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </>
    );
}