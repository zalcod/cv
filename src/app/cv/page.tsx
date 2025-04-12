'use client';

import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function CVPage() {
    // Store original theme and set to light for PDF
    const { theme, setTheme } = useTheme();
    
    // Set light theme for printing
    useEffect(() => {
        const handleBeforePrint = () => {
            // Store current theme before printing
            const currentTheme = theme || 'system';
            // Force light theme for printing
            setTheme("light");
            
            // After printing is done, restore the original theme
            setTimeout(() => {
                setTheme(currentTheme);
            }, 500);
        };
        
        window.addEventListener('beforeprint', handleBeforePrint);
        return () => {
            window.removeEventListener('beforeprint', handleBeforePrint);
        };
    }, [theme, setTheme]);

    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"
        >
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-2xl space-y-8 bg-white dark:bg-gray-900 px-8 py-8 print:space-y-6 print:py-6 print:px-6 print:bg-white"
            >
                <div className="flex items-center justify-between print:hidden">
                    <Link href="/">
                        <Button variant="ghost" className="flex items-center gap-2">
                            <ArrowLeft className="size-4" />
                            Ana Sayfa
                        </Button>
                    </Link>
                </div>

                {/* Profile photo and name at the top - centered */}
                <div className="flex flex-col items-center justify-center gap-4 mb-8">
                    <Avatar className="size-36 border-2 border-muted bg-gradient-to-br from-primary to-primary-foreground">
                        <AvatarImage src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} />
                        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
                        <p className="text-sm text-muted-foreground max-w-md mt-2">{RESUME_DATA.about}</p>
                        <p className="text-xs text-muted-foreground mt-1">{RESUME_DATA.location}</p>
                    </div>
                </div>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold">Eğitim</h2>
                    {RESUME_DATA.education.map((education) => (
                        <div key={education.school} className="space-y-2">
                            <h3 className="font-semibold">{education.school}</h3>
                            <p className="text-sm text-muted-foreground">{education.degree}</p>
                            <p className="text-xs text-muted-foreground">
                                {education.start} - {education.end}
                            </p>
                            {education.additionalInfo && (
                                <p className="text-xs text-muted-foreground">
                                    {education.additionalInfo}
                                </p>
                            )}
                        </div>
                    ))}
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold">İş Deneyimi</h2>
                    {RESUME_DATA.work.map((work) => (
                        <div key={work.company} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{work.company}</h3>
                                <span className="text-sm text-muted-foreground">
                                    {work.start} - {work.end}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{work.title}</p>
                            <p className="text-sm">{work.description}</p>
                        </div>
                    ))}
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold">Yetenekler</h2>
                    <div className="flex flex-wrap gap-2 print:gap-2">
                        {RESUME_DATA.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full bg-gradient-to-br from-primary/20 to-primary-foreground/20 px-3 py-1 text-sm print:bg-gray-100 print:text-black"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold">Diller</h2>
                    <div className="flex flex-wrap gap-2 print:gap-2">
                        {RESUME_DATA.languages.map((language) => (
                            <span
                                key={language}
                                className="rounded-full bg-gradient-to-br from-primary/20 to-primary-foreground/20 px-3 py-1 text-sm print:bg-gray-100 print:text-black"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </section>
            </motion.div>
        </motion.main>
    );
}