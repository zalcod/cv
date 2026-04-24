/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
    transpilePackages: ['framer-motion'],
    // Prevent dev/build fighting over the same .next directory.
    // Run builds with: NEXT_DIST_DIR=.next-build
    distDir: process.env.NEXT_DIST_DIR || '.next',
}

module.exports = withNextIntl(nextConfig);
