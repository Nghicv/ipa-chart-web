import type { NextConfig } from "next";

// Platform detection
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isNetlify = process.env.NETLIFY === 'true';

// Determine if it's a static build
const isStatic = isGitHubPages || isNetlify;

// Base path logic for GitHub Pages
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const basePath = isGitHubPages ? `/${repo}` : '';
const assetPrefix = isGitHubPages ? `/${repo}/` : '';

console.log("--- Build Environment ---");
console.log(`isGitHubPages: ${isGitHubPages}`);
console.log(`isNetlify: ${isNetlify}`);
console.log(`isStatic: ${isStatic}`);
console.log(`basePath: ${basePath}`);
console.log("-----------------------");

const nextConfig: NextConfig = {
  // Use static export for GitHub Pages and Netlify
  output: isStatic ? 'export' : undefined,

  // Use 'out' as the build directory for all static builds
  distDir: isStatic ? 'out' : '.next',

  // GitHub Pages specific configuration
  ...(isGitHubPages && {
    basePath: basePath,
    assetPrefix: assetPrefix,
  }),

  // Unoptimized images for all static builds
  images: {
    unoptimized: isStatic,
  },
};

export default nextConfig;
