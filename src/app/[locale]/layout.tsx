import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales, defaultLocale } from '@/i18n/config';
import { Providers } from '../providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!locales.includes(locale as any)) {
        notFound();
    }

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <div className="min-h-screen bg-background">
                            <Navbar />
                            {children}

                        </div>
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
} 