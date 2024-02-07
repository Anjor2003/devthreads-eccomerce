import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:  {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "files.stripe.com",
      },
    ],
  },
};

export default nextConfig;
