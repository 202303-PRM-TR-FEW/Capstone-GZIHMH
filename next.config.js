/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['openlearning-cdn.s3.amazonaws.com', 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    },
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
);

module.exports = withNextIntl(nextConfig);