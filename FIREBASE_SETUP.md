# 🔥 Firebase Hosting Setup Guide

## 🚀 Quick Setup (5 phút)

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `ipa-chart-web` (or any name)
4. Enable Google Analytics (optional)
5. Click **"Create project"**

### 2. Enable Hosting
1. In Firebase Console → **"Hosting"**
2. Click **"Get started"**
3. Follow the setup wizard

### 3. Update Project Configuration
```bash
# Update .firebaserc with your project ID
# Replace "your-firebase-project-id" with actual project ID
```

Edit `.firebaserc`:
```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

### 4. Install Firebase CLI (if not installed)
```bash
npm install -g firebase-tools
firebase login
```

## 🛠️ Deployment Options

### Option 1: Manual Deploy
```bash
# Build for Firebase
npm run firebase:build

# Deploy to Firebase
npm run firebase:deploy
```

### Option 2: GitHub Actions (Automatic)
1. **Generate Service Account Key:**
   - Firebase Console → Project Settings → Service Accounts
   - Click **"Generate new private key"**
   - Download the JSON file

2. **Add GitHub Secrets:**
   - Go to GitHub repo → Settings → Secrets and Variables → Actions
   - Add these secrets:
     - `FIREBASE_SERVICE_ACCOUNT_KEY`: Content of downloaded JSON
     - `FIREBASE_PROJECT_ID`: Your Firebase project ID

3. **Enable GitHub Actions:**
   - The workflow `.github/workflows/firebase.yml` will auto-deploy on push

### Option 3: Local Development
```bash
# Serve locally with Firebase emulator
npm run firebase:serve

# Start Firebase emulators
npm run firebase:emulators
```

## 🔧 Configuration Details

### Firebase Configuration (`firebase.json`)
- **Public folder**: `out` (Next.js static export)
- **Rewrites**: SPA routing support
- **Headers**: Optimized caching for static assets
- **Clean URLs**: `/about` instead of `/about.html`

### Next.js Configuration
When `FIREBASE_CI=true`:
- Output: Static export
- Dist folder: `out`
- Images: Unoptimized (static)
- Trailing slash: Disabled

## 🌐 Access Your Site

After deployment:
- **Firebase URL**: `https://your-project-id.web.app`
- **Custom domain**: Configure in Firebase Console → Hosting

## 🔍 Troubleshooting

### Build Issues
```bash
# Clean all build artifacts
npm run clean

# Fresh install
rm -rf node_modules package-lock.json
npm install

# Test Firebase build
npm run firebase:build
```

### Deploy Issues
```bash
# Check Firebase login
firebase login

# Verify project
firebase projects:list

# Check current project
firebase use --add
```

### GitHub Actions Issues
1. **Check Secrets**: Ensure all secrets are added correctly
2. **Service Account**: Verify permissions in Firebase IAM
3. **Project ID**: Match exactly with Firebase Console

## 🎯 Features

### ✅ What Works on Firebase:
- Static hosting (blazing fast)
- CDN distribution worldwide  
- SSL certificates (automatic)
- Custom domains
- SPA routing
- Asset optimization

### ❌ What Doesn't Work:
- Server-side rendering (SSR)
- API routes
- Dynamic functions
- Database integration (unless configured separately)

## 📊 Performance

Firebase Hosting provides:
- **Global CDN**: Sub-100ms response times
- **HTTP/2**: Faster loading
- **Gzip compression**: Automatic
- **Caching**: Aggressive static asset caching

## 💡 Tips

1. **Preview before deploy**:
   ```bash
   firebase hosting:channel:deploy preview
   ```

2. **Rollback if needed**:
   ```bash
   firebase hosting:clone source:target
   ```

3. **Custom domain**:
   - Firebase Console → Hosting → Add custom domain
   - Follow DNS setup instructions

4. **Monitoring**:
   - Firebase Console → Analytics
   - Real-time visitor tracking 