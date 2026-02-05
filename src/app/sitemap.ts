import { MetadataRoute } from 'next';

const BASE_URL = 'https://zalsolmus.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/cv'];
    const locales = ['tr', 'en', 'ar'];

    const sitemapEntries = routes.flatMap((route) =>
        locales.map((locale) => ({
            url: `${BASE_URL}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8,
        }))
    );

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...sitemapEntries
    ];
}
