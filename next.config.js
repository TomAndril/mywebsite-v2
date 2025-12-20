/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://cdn.sanity.io")],
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    SANITY_DATASET: process.env.SANITY_DATASET,
    NEXT_PUBLIC_TURNSTILE_SITEKEY: process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY,
    NEXT_TURNSTILE_SECRET_KEY: process.env.NEXT_TURNSTILE_SECRET_KEY,
  },
}

module.exports = nextConfig
