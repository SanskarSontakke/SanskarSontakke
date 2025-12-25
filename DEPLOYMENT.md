# Deployment Guide - Vercel

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

- A GitHub account (recommended)
- A Vercel account (free tier available)
- Node.js and npm installed locally

## Quick Deploy (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect the settings:
     - Framework: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Configuration Files

### `vercel.json`
- Configures build settings
- Sets up SPA routing (all routes redirect to index.html)
- Optimizes static asset caching

### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size

## Environment Variables

If you need environment variables:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check Vercel build logs for specific errors

### Routing Issues
- The `vercel.json` includes rewrites for SPA routing
- Hash-based routing (#home, #about) works automatically

### Assets Not Loading
- Ensure all assets are in the `public` folder
- Check that paths are relative, not absolute

## Post-Deployment

1. Test all pages and navigation
2. Check mobile responsiveness
3. Verify all animations work
4. Test on different browsers

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch auto-deploys to production
- Pull requests create preview deployments
- No manual deployment needed!

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

