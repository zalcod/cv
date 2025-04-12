import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './config';

export default getRequestConfig(async ({ locale = defaultLocale }) => ({
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
})); 