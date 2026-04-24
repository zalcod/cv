"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useTheme } from "next-themes"
import { RESUME_DATA_EN, RESUME_DATA_TR, RESUME_DATA_AR } from "@/data/resume-data"
import { useTranslations } from 'next-intl'
import { CommandMenu } from "@/components/CommandMenu"
import { Switch } from "@/components/ui/switch"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Sun, X } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const { locale } = useParams()
    const pathname = usePathname()
    const t = useTranslations()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const getResumeData = () => {
        switch (locale) {
            case "en":
                return RESUME_DATA_EN
            case "tr":
                return RESUME_DATA_TR
            case "ar":
                return RESUME_DATA_AR
            default:
                return RESUME_DATA_TR
        }
    }

    const resumeData = getResumeData()
    const isHomePage = pathname === `/${locale}`
    const isCVPage = pathname === `/${locale}/cv`

    return (
        <nav className="sticky top-0 z-50 border-b h-16 bg-card/80 backdrop-blur-sm px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl flex items-center justify-start gap-4 h-full">
                <div className="hidden sm:flex items-center gap-4">
                        <Link
                            href={`/${locale}`}
                            className={`text-sm font-medium hover:text-primary transition-colors ${isHomePage ? "text-primary" : "text-muted-foreground"}`}
                        >
                            {t('navigation.home')}
                        </Link>
                        <Link
                            href={`/${locale}/cv`}
                            className={`text-sm font-medium hover:text-primary transition-colors ${isCVPage ? "text-primary" : "text-muted-foreground"}`}
                        >
                            {t('navigation.cv')}
                        </Link>
                </div>
                <div className="flex items-center gap-2 ml-2">
                    <CommandMenu />

                    {/* Theme Switch */}
                    {mounted ? (
                        <div className="h-9 w-[60px]">
                            <Switch
                                checked={theme === "dark"}
                                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                                aria-label="Tema değiştir"
                                className="h-9 w-[60px]"
                            >
                                {theme === "dark" ? (
                                    <Moon className="h-3.5 w-3.5 text-background" />
                                ) : (
                                    <Sun className="h-3.5 w-3.5 text-background" />
                                )}
                            </Switch>
                        </div>
                    ) : null}

                    <LanguageSwitcher />

                    {/* Hamburger Menu Button (visible only on mobile) */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="sm:hidden bg-white dark:bg-background border border-primary/30 hover:border-primary/50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        className="sm:hidden fixed inset-x-0 top-16 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b z-50"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="flex flex-col p-4 space-y-3">
                            <Link
                                href={`/${locale}`}
                                className={`px-3 py-2 text-sm font-medium rounded-md border border-primary/20 hover:border-primary/40 bg-white dark:bg-background transition-colors ${isHomePage ? "text-primary" : "text-muted-foreground"}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('navigation.home')}
                            </Link>
                            <Link
                                href={`/${locale}/cv`}
                                className={`px-3 py-2 text-sm font-medium rounded-md border border-primary/20 hover:border-primary/40 bg-white dark:bg-background transition-colors ${isCVPage ? "text-primary" : "text-muted-foreground"}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('navigation.cv')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}