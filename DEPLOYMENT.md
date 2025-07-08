# 🚀 Triple Deployment Guide

This project supports **triple deployment** to **Vercel**, **GitHub Pages**, and **Firebase Hosting** with automatic platform detection.

## 📋 Platform Configuration

The `next.config.ts` automatically detects the deployment platform and applies the appropriate configuration:

### 🔵 **Vercel** (Dynamic)
- **Detection**: `process.env.VERCEL === '1'` or default
- **Features**: SSR, Image Optimization, Dynamic Routing, Edge Functions
- **Build**: `.next` folder (server + static)
- **URL**: `https://your-project.vercel.app`

### 🟢 **GitHub Pages** (Static)
- **Detection**: `process.env.GITHUB_ACTIONS === 'true'` (without Firebase)
- **Features**: Static Export, Free Hosting, CDN
- **Build**: `dist` folder (static only) 
- **Base Path**: `/repo-name` (auto-configured)
- **URL**: `https://username.github.io/repo-name`

### 🔥 **Firebase Hosting** (Static)
- **Detection**: `process.env.FIREBASE_CI === 'true'`
- **Features**: Global CDN, Custom Domains, Advanced Caching
- **Build**: `out` folder (static only)
- **URL**: `https://project-id.web.app`

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

## 🚀 Deploy to Firebase Hosting

### Prerequisites
See detailed setup: **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**

### Quick Setup
1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Update `.firebaserc` with your project ID
3. Choose deployment method below

### Option 1: Manual Deploy
```bash
# Build for Firebase
npm run firebase:build

# Deploy to Firebase
npm run firebase:deploy
```

### Option 2: GitHub Actions (Automatic)
1. Add GitHub Secrets: `FIREBASE_SERVICE_ACCOUNT_KEY` and `FIREBASE_PROJECT_ID`
2. Push to main branch - auto-deploys via `.github/workflows/firebase.yml`

### 🔧 Firebase Features:
- ✅ Global CDN (sub-100ms)
- ✅ Advanced caching & headers
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Rollback capabilities

## 🐛 Common Issues & Solutions

### ❌ **GitHub Pages: CSS not loading**
**Solution**: Automatic! The config adds proper basePath:
```typescript
basePath: '/ipa-chart-web'
assetPrefix: '/ipa-chart-web/'
```

### ❌ **Vercel: 404 errors**
**Solution**: See [VERCEL_TROUBLESHOOT.md](./VERCEL_TROUBLESHOOT.md)
- Force redeploy via dashboard
- Clear build cache

### ❌ **Firebase: Build/Deploy errors**
**Solution**: See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
- Check project ID in `.firebaserc`
- Verify Firebase CLI login

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

### Test Firebase build
```bash
npm run firebase:build
# Creates out folder for Firebase Hosting
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
  distDir: 'dist',
  images: { unoptimized: true },
}
```

### Firebase Configuration
```typescript
{
  output: 'export',
  trailingSlash: false,
  distDir: 'out',
  images: { unoptimized: true },
}
```

## 🌐 Live Sites

- **Vercel**: [Add your Vercel URL]
- **GitHub Pages**: `https://nghicv.github.io/ipa-chart-web/`
- **Firebase**: `https://your-project-id.web.app`

## 📊 Platform Comparison

| Feature | Vercel | GitHub Pages | Firebase |
|---------|--------|--------------|----------|
| **Cost** | Free tier | Free | Free tier |
| **SSR** | ✅ | ❌ | ❌ |
| **Static** | ✅ | ✅ | ✅ |
| **CDN** | ✅ | ✅ | ✅ (Global) |
| **Custom Domain** | ✅ | ✅ | ✅ |
| **Build Time** | Fast | Medium | Fast |
| **Caching** | Good | Good | Advanced |
| **Analytics** | ✅ | ❌ | ✅ |

## 📝 Notes

- ✅ All three deployments use the same source code
- ✅ Platform detection is automatic
- ✅ No manual configuration needed
- ✅ CSS and assets work correctly on all platforms
- ✅ URLs are properly configured for each platform
- ✅ Choose the platform that best fits your needs! 