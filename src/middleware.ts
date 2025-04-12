import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

// Dil seçenekleri ve varsayılan dil
const locales = ['en', 'tr', 'ar'];
const defaultLocale = 'tr';

// next-intl middleware
const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

export default intlMiddleware;

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)', '/', '/(en|tr|ar)/:path*']
}; 