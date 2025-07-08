# 🚀 Deployment Guide

This project supports dual deployment to both **Vercel** and **GitHub Pages** with automatic platform detection.

## 📋 Platform Configuration

The `next.config.ts` automatically detects the deployment platform and applies the appropriate configuration:

### 🔵 **Vercel** (Dynamic)
- **Detection**: `process.env.VERCEL === '1'`
- **Features**: SSR, Image Optimization, API Routes
- **URL**: `https://your-project.vercel.app`

### 🟢 **GitHub Pages** (Static)
- **Detection**: `process.env.GITHUB_ACTIONS === 'true'`
- **Features**: Static Export, Free Hosting
- **URL**: `https://username.github.io/repo-name`

### 🟡 **Local Development**
- **Default**: Dynamic development server
- **Command**: `npm run dev`

## 🚀 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically on push

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

## 🚀 Deploy to GitHub Pages

### Prerequisites
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"

### Automatic Deployment
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Action will automatically:
- Build with static export
- Deploy to GitHub Pages

## 🔧 Configuration Details

### Vercel Configuration
```typescript
{
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
```

### GitHub Pages Configuration
```typescript
{
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}
```

## ✅ Testing Locally

### Test Default (Vercel-like)
```bash
npm run build
```

### Test GitHub Pages
```bash
GITHUB_ACTIONS=true npm run build
```

## 🌐 Live Sites

- **Vercel**: [Add your Vercel URL]
- **GitHub Pages**: [Add your GitHub Pages URL]

## 📝 Notes

- Both deployments use the same source code
- Platform detection is automatic
- No manual configuration needed
- Both sites will have identical content 