import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n/config';
import { Providers } from '../providers';

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

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <div lang={locale} dir={dir}>
                    {children}
                </div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Zal Solmuş",
                            url: "https://zalsolmus.com",
                            jobTitle: "Software Developer & Digital Transformation Specialist",
                            sameAs: [
                                "https://github.com/zalcod",
                                "https://www.linkedin.com/in/zalcod/",
                                "https://bsky.app/profile/zalsolmus.com",
                                "https://zalsolmus.substack.com"
                            ]
                        })
                    }}
                />
            </NextIntlClientProvider>
        </Providers>
    );
} 