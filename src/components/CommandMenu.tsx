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
import { Download, FileText, Link as LinkIcon, Command as CommandIcon } from "lucide-react";
import { ResumeData } from "@/data/resume-data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface CommandMenuProps {
    resumeData: ResumeData;
}

export function CommandMenu({ resumeData }: CommandMenuProps) {
    const t = useTranslations();
    const [html2pdf, setHtml2pdf] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [isMac, setIsMac] = useState(typeof window !== 'undefined' ? navigator.userAgent.indexOf('Mac') !== -1 : false);
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="transition-all bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 hover:from-primary/20 hover:via-blue-400/20 hover:to-teal-400/20"
                    >
                        <CommandIcon className="h-5 w-5" />
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
            {!isMobile && (
                <div className="fixed bottom-4 right-4 text-sm text-muted-foreground print:hidden">
                    {t('commands.press')} <kbd className="px-1.5 py-0.5 rounded border bg-muted text-xs font-mono">{isMac ? '⌘' : 'Ctrl'} + J</kbd> {t('commands.toOpen')}
                </div>
            )}
        </>
    );
}