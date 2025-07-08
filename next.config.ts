import type { NextConfig } from "next";

// Detect deployment platform
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && !process.env.FIREBASE_CI;
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV !== undefined;
const isFirebase = process.env.FIREBASE_CI === 'true' || process.env.GITHUB_ACTIONS === 'true' && process.env.FIREBASE_CI;

// GitHub Pages needs repo name as base path
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const basePath = isGitHubPages ? `/${repo}` : '';
const assetPrefix = isGitHubPages ? `/${repo}/` : '';

// Debug logging
console.log('🔍 Deployment Detection:');
console.log('- GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);
console.log('- FIREBASE_CI:', process.env.FIREBASE_CI);
console.log('- VERCEL:', process.env.VERCEL);
console.log('- VERCEL_ENV:', process.env.VERCEL_ENV);
console.log('- isGitHubPages:', isGitHubPages);
console.log('- isFirebase:', isFirebase);
console.log('- isVercel:', isVercel);
console.log('- basePath:', basePath);

const nextConfig: NextConfig = {
  /* config options here */
  
  // GitHub Pages configuration
  ...(isGitHubPages && {
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
  
  // Firebase Hosting configuration
  ...(isFirebase && {
    output: 'export',
    trailingSlash: false,
    distDir: 'out',
    images: {
      unoptimized: true,
    },
  }),
  
  // Vercel or default configuration
  ...(!isGitHubPages && !isFirebase && {
    trailingSlash: false,
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  }),
};

export default nextConfig;
