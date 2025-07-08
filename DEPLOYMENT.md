# 🚀 Deployment Guide

This project supports dual deployment to both **Vercel** and **GitHub Pages** with automatic platform detection.

## 📋 Platform Configuration

The `next.config.ts` automatically detects the deployment platform and applies the appropriate configuration:

### 🔵 **Vercel** (Dynamic)
- **Detection**: `process.env.VERCEL === '1'` or default
- **Features**: SSR, Image Optimization, Dynamic Routing
- **Build**: `.next` folder (server + static)
- **URL**: `https://your-project.vercel.app`

### 🟢 **GitHub Pages** (Static)
- **Detection**: `process.env.GITHUB_ACTIONS === 'true'`
- **Features**: Static Export, Free Hosting, CDN
- **Build**: `dist` folder (static only) 
- **Base Path**: `/repo-name` (auto-configured)
- **URL**: `https://username.github.io/repo-name`

### 🟡 **Local Development**
- **Default**: Dynamic development server
- **Command**: `npm run dev`

## 🚀 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically on push
4. **No configuration needed** - auto-detects Next.js

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### 🔧 Vercel Features:
- ✅ Server-side rendering
- ✅ API routes support
- ✅ Image optimization
- ✅ Edge functions
- ✅ Zero configuration

## 🚀 Deploy to GitHub Pages

### Prerequisites
1. Go to repository **Settings** → **Pages**
2. Set source to **"GitHub Actions"**

### Automatic Deployment
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Action will automatically:
- Build with static export
- Configure basePath for GitHub Pages
- Deploy to `gh-pages` branch

### 🔧 GitHub Pages Features:
- ✅ Static hosting (fast CDN)
- ✅ Free for public repos
- ✅ Auto SSL certificates
- ✅ Custom domains supported

## 🐛 Common Issues & Solutions

### ❌ **GitHub Pages: CSS not loading**
**Solution**: Automatic! The config adds proper basePath:
```typescript
basePath: '/ipa-chart-web'
assetPrefix: '/ipa-chart-web/'
```

### ❌ **Vercel: 404 errors**
**Solution**: Removed `vercel.json` for auto-detection:
- Vercel auto-detects Next.js framework
- No manual configuration needed

## ✅ Testing Locally

### Test Vercel-like build (default)
```bash
npm run build
# Creates .next folder for dynamic rendering
```

### Test GitHub Pages build
```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=username/repo-name npm run build
# Creates dist folder with basePath configured
```

## 🔧 Configuration Details

### Vercel Configuration
```typescript
{
  trailingSlash: false,
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
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
  images: {
    unoptimized: true,
  },
}
```

## 🌐 Live Sites

- **Vercel**: [Add your Vercel URL]
- **GitHub Pages**: `https://nghicv.github.io/ipa-chart-web/`

## 📝 Notes

- ✅ Both deployments use the same source code
- ✅ Platform detection is automatic
- ✅ No manual configuration needed
- ✅ CSS and assets work correctly on both platforms
- ✅ URLs are properly configured for each platform 