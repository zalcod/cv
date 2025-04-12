"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useTheme } from "next-themes"
import { RESUME_DATA_EN, RESUME_DATA_TR, RESUME_DATA_AR } from "@/data/resume-data"
import { useTranslations } from 'next-intl'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Search, Sun, X } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const { locale } = useParams()
    const pathname = usePathname()
    const t = useTranslations()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

    const handleSearchClick = () => {
        document.getElementById('command-menu-trigger')?.click();
    }

    return (
        <nav className="sticky top-0 z-50 border-b h-16 flex items-center justify-between px-4 md:px-6 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-6">
                <Link href={`/${locale}`} className="font-semibold text-lg hover:text-primary transition-colors">
                    {resumeData.name}
                </Link>
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
            </div>
            <div className="flex items-center gap-2">
                <LanguageSwitcher />
                
                {/* Search Button (visible only on mobile) */}
                <Button
                    variant="outline"
                    size="icon"
                    className="sm:hidden bg-white dark:bg-background border border-primary/30 hover:border-primary/50"
                    onClick={handleSearchClick}
                >
                    <Search className="h-5 w-5" />
                </Button>
                
                {/* Theme Toggle Button */}
                <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="bg-white dark:bg-background border border-primary/30 hover:border-primary/50"
                >
                    <motion.div
                        initial={false}
                        animate={{ 
                            rotate: theme === "dark" ? 360 : 0,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                            duration: 0.6, 
                            ease: "easeInOut",
                            scale: {
                                times: [0, 0.5, 1],
                                duration: 0.5
                            }
                        }}
                        className="relative"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute inset-0 dark:opacity-0" />
                        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all opacity-0 dark:opacity-100" />
                    </motion.div>
                </Button>
                
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
        </nav>
    )
}