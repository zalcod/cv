"use client"

import * as React from "react"
import { useTranslations } from 'next-intl'

export function Footer() {
    const t = useTranslations()

    return (
        <footer className="py-2 border-t border-muted print:hidden bg-background/80 dark:bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xs text-muted-foreground">
                    {new Date().getFullYear()} Zal Solmuş. {t('footer.allRightsReserved')}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 px-2 py-0.5 rounded-md shadow-sm">
                        Kişisel Web Sitesi
                    </span>
                </div>
            </div>
        </footer>
    )
}
