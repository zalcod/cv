'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { RESUME_DATA_EN, RESUME_DATA_TR, RESUME_DATA_AR } from "@/data/resume-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Footer } from "@/components/footer";

export default function Home() {
    const t = useTranslations();
    const { locale } = useParams();

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

    return (
        <div className="flex flex-col min-h-screen">
            <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 flex-grow">
                <section className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <motion.div
                            className="relative"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25
                            }}
                        >
                            <motion.div
                                className="absolute -inset-5 rounded-full bg-gradient-to-br from-primary via-blue-400 to-teal-400 opacity-30 blur-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut"
                                }}
                            />
                            <Avatar className="size-40 relative">
                                <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
                                <AvatarFallback>{resumeData.initials}</AvatarFallback>
                            </Avatar>
                        </motion.div>
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold">{resumeData.name}</h1>
                            <p className="text-xl text-muted-foreground">{resumeData.about}</p>
                            {resumeData.location && (
                                <p className="flex items-center justify-center text-sm text-muted-foreground mt-1">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{resumeData.location}</span>
                                </p>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {resumeData.contact.social.map((social) => (
                                <Button
                                    key={social.name}
                                    asChild
                                    variant="outline"
                                    size="icon"
                                    className="transition-all bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 hover:from-primary/20 hover:via-blue-400/20 hover:to-teal-400/20"
                                >
                                    <Link href={social.url} target="_blank">
                                        <social.icon className="h-5 w-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Section>
                        <div className="relative mb-6">
                            <h2 className="text-2xl font-bold mb-2">{t('sections.blog')}</h2>
                            <div className="h-1 w-full bg-gradient-to-br from-primary via-blue-400 to-teal-400 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {resumeData.blogPosts.map((post) => (
                                <Card key={post.title} className="transition-all bg-gradient-to-br from-primary/5 via-blue-400/5 to-teal-400/5 hover:from-primary/10 hover:via-blue-400/10 hover:to-teal-400/10 border border-muted">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-bold">{post.title}</h3>
                                                <p className="text-muted-foreground">{post.description}</p>
                                            </div>
                                        </div>
                                        <Link
                                            href={post.url}
                                            target="_blank"
                                            className="mt-2 flex items-center text-sm text-primary hover:underline"
                                        >
                                            {t('navigation.readMore')}
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Section>
                </section>
            </main>
            <Footer />
        </div>
    );
} 