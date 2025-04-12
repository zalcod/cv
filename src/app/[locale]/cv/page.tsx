'use client';

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA_EN, RESUME_DATA_TR, RESUME_DATA_AR } from "@/data/resume-data";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { MapPin } from "lucide-react";
import { CommandMenu } from "@/components/CommandMenu";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";

export default function CVPage() {
    const t = useTranslations();
    const { locale } = useParams();
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMac, setIsMac] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMounted(true);
            // Mobil olup olmadığını kontrol et
            setIsMobile(window.innerWidth < 640);
            // İşletim sistemi kontrolü
            setIsMac(navigator.userAgent.indexOf('Mac') !== -1);

            const handleResize = () => {
                setIsMobile(window.innerWidth < 640);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Command+J veya Ctrl+J tuş kombinasyonu için olay dinleyicisi ekleme
            const handleKeyDown = (event: KeyboardEvent) => {
                if ((event.metaKey || event.ctrlKey) && event.key === 'j') {
                    event.preventDefault();
                    document.getElementById('command-menu-trigger')?.click();
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    const getResumeData = () => {
        switch (locale) {
            case 'en':
                return RESUME_DATA_EN;
            case 'tr':
                return RESUME_DATA_TR;
            case 'ar':
                return RESUME_DATA_AR;
            default:
                return RESUME_DATA_TR;
        }
    };

    const resumeData = getResumeData();

    if (!mounted) return null;

    return (
        <motion.main
            className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="mx-auto w-full max-w-2xl space-y-8 bg-background dark:bg-background px-8 py-8 print:space-y-6 print:py-6 print:px-6 print:bg-white print:text-black">
                <CommandMenu resumeData={resumeData} />

                <div className="flex items-center justify-between print:hidden">
                    <Link href="/">
                        <Button
                            variant="outline"
                            size="sm"
                            className="transition-all bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 hover:from-primary/20 hover:via-blue-400/20 hover:to-teal-400/20 flex items-center gap-2"
                        >
                            <ArrowLeft className="size-4" />
                            {t('navigation.home')}
                        </Button>
                    </Link>


                </div>

                {/* Profile photo and name at the top - left aligned */}
                <div className="flex flex-col md:flex-row items-start gap-4 print:flex-row print:gap-8 mb-8">
                    <Avatar className="size-32 print:size-32 border-2 border-muted bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10">
                        <AvatarImage src={resumeData.avatarUrl} alt={resumeData.name} />
                        <AvatarFallback>{resumeData.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start text-left">
                        <h1 className="text-3xl font-bold">{resumeData.name}</h1>
                        <p className="text-lg text-muted-foreground max-w-md">{resumeData.about}</p>
                        <p className="text-sm text-muted-foreground">{resumeData.location}</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* About Section */}
                    <Section className="flex flex-col items-start gap-4">
                        <h2 className="text-2xl font-bold w-full">{t('sections.about')}</h2>
                        <div className="prose dark:prose-invert w-full">
                            <p>{resumeData.summary}</p>
                            <p className="flex items-center text-sm text-muted-foreground mt-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{resumeData.location}</span>
                            </p>
                        </div>
                    </Section>

                    {/* Work Experience */}
                    <Section>
                        <h2 className="text-2xl font-bold mb-4">{t('sections.workExperience')}</h2>
                        <div className="space-y-6">
                            {resumeData.work.map((job) => (
                                <div key={job.company} className="border-b dark:border-gray-700 pb-6 last:border-0 bg-background dark:bg-background">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg">{job.company}</h3>
                                            <p className="text-primary">{job.title}</p>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {job.start} - {job.end}
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        {job.badges && job.badges.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {job.badges.map((badge) => (
                                                    <Badge key={badge} variant="secondary" className="shadow-sm shadow-primary/5">{badge}</Badge>
                                                ))}
                                            </div>
                                        )}
                                        <p className="text-muted-foreground">{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Education */}
                    <Section>
                        <h2 className="text-2xl font-bold mb-4">{t('sections.education')}</h2>
                        <div className="space-y-6">
                            {resumeData.education.map((edu) => (
                                <div key={edu.school} className="border-b dark:border-gray-700 pb-6 last:border-0 bg-background dark:bg-background">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg">{edu.school}</h3>
                                            <p className="text-primary">{edu.degree}</p>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {edu.start} - {edu.end}
                                        </div>
                                    </div>
                                    {edu.additionalInfo && (
                                        <p className="text-muted-foreground mt-2">{edu.additionalInfo}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Skills */}
                    <Section>
                        <div className="bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 p-0.5 rounded-lg">
                            <div className="bg-background dark:bg-background rounded-lg p-5">
                                <h2 className="text-2xl font-bold mb-4">{t('sections.skills')}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            className="bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 hover:from-primary/20 hover:via-blue-400/20 hover:to-teal-400/20 border-0"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Projects */}
                    <Section>
                        <h2 className="text-2xl font-bold mb-4">{t('sections.projects')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {resumeData.projects.map((project) => (
                                <Card key={project.title} className="transition-all bg-gradient-to-br from-primary/5 via-blue-400/5 to-teal-400/5 hover:from-primary/10 hover:via-blue-400/10 hover:to-teal-400/10 border border-muted">
                                    <CardContent className="p-4">
                                        <h3 className="font-bold text-lg">{project.title}</h3>
                                        <p className="text-muted-foreground mt-1">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {project.techStack.map((tech) => (
                                                <Badge key={tech} variant="outline" className="bg-gradient-to-br from-primary/5 via-blue-400/5 to-teal-400/5">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <Link
                                                href={project.link.href}
                                                target="_blank"
                                                className="text-primary hover:underline mt-3 inline-block text-sm"
                                            >
                                                {project.link.label}
                                            </Link>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Section>

                    {/* Extracurricular Activities */}
                    <Section>
                        <h2 className="text-2xl font-bold mb-4">{t('sections.extracurricular')}</h2>
                        <div className="space-y-6">
                            {resumeData.extracurricularActivities.map((activity) => (
                                <div key={activity.organization} className="border-b dark:border-gray-700 pb-6 last:border-0 bg-background dark:bg-background">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg">{activity.organization}</h3>
                                            <p className="text-primary">{activity.role}</p>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {activity.start} - {activity.end}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mt-2">{activity.description}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Languages */}
                    <Section>
                        <h2 className="text-2xl font-bold mb-4">{t('sections.languages')}</h2>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.languages.map((language) => (
                                <Badge key={language}>{language}</Badge>
                            ))}
                        </div>
                    </Section>
                </div>
                {/* Command menu shortcut hint - small and unobtrusive */}
                <div className="mt-8 text-center text-sm text-muted-foreground print:hidden">
                    <span>{isMobile ? t('commands.press') : t('commands.press')} <kbd className="px-1 py-0.5 rounded bg-gradient-to-br from-primary/5 via-blue-400/5 to-teal-400/5 shadow-sm">{isMobile ? '🔍' : '⌘J'}</kbd> {t('commands.toOpen')}</span>
                </div>
            </div>
        </motion.main>
    );
}