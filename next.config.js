/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        domains: ['openlearning-cdn.s3.amazonaws.com', 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    },
    i18n: {
      locales: ['en', 'tr'], // Add more locales as needed
      defaultLocale: 'en',
    },
};

  