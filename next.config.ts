import type { NextConfig } from "next";

// Detect deployment platform
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  /* config options here */
  ...(isGitHubPages && {
    // GitHub Pages configuration
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'dist',
    images: {
      unoptimized: true,
    },
  }),
  
  ...(isVercel && {
    // Vercel configuration
    trailingSlash: false,
    poweredByHeader: false,
    compress: true,
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  }),
  
  // Default configuration (local development)
  ...(!isGitHubPages && !isVercel && {
    trailingSlash: false,
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  }),
};

export default nextConfig;
