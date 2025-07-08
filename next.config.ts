import type { NextConfig } from "next";

// Detect deployment platform
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isVercel = process.env.VERCEL === '1';

// GitHub Pages needs repo name as base path
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const basePath = isGitHubPages ? `/${repo}` : '';
const assetPrefix = isGitHubPages ? `/${repo}/` : '';

const nextConfig: NextConfig = {
  /* config options here */
  ...(isGitHubPages && {
    // GitHub Pages configuration
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'dist',
    basePath,
    assetPrefix,
    images: {
      unoptimized: true,
    },
  }),
  
  ...(isVercel && {
    // Vercel configuration - simplified for SSG
    trailingSlash: false,
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
