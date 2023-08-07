/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['openlearning-cdn.s3.amazonaws.com', 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    },
};

const nextTranslate = require('next-translate-plugin');

module.exports = {
    ...nextConfig,
    ...nextTranslate(),
};
