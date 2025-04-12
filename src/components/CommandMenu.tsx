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
import { Download, FileText, Link as LinkIcon } from "lucide-react";
import { ResumeData } from "@/data/resume-data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface CommandMenuProps {
    resumeData: ResumeData;
}

export function CommandMenu({ resumeData }: CommandMenuProps) {
    const t = useTranslations();
    const [html2pdf, setHtml2pdf] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('html2pdf.js').then((module) => {
                setHtml2pdf(module.default);
            });
        }
    }, []);

    const downloadPDF = () => {
        if (!html2pdf) return;

        const element = document.querySelector('main');
        if (!element) return;

        // Enhanced PDF settings
        const opt = {
            margin: [15, 15, 15, 15],
            filename: `${resumeData.name} - CV.pdf`,
            image: { type: 'jpeg', quality: 1.0 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
                letterRendering: true
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                putOnlyUsedFonts: true
            }
        };

        // Create and download PDF
        html2pdf().set(opt).from(element).save();
    };

    const openLink = (url: string) => {
        if (typeof window !== 'undefined') {
            window.open(url, '_blank');
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    id="command-menu-trigger"
                    variant="outline"
                    size="icon"
                    className="fixed bottom-4 right-16 rounded-full opacity-80 hover:opacity-100 hidden"
                >
                    <span className="sr-only">Open command menu</span>
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
    );
}