const withTM = require('next-transpile-modules')(['tailwindcss'])

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ['bee-brick-test.s3.eu-central-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bee-brick-test.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
  i18n: {
    locales: ['en', 'ru', 'uk'],
    defaultLocale: 'en',
  },
})

module.exports = nextConfig
