# Sanskar Sontakke - Portfolio Website

A modern, interactive portfolio website showcasing projects, skills, and academic achievements.

## Features

- 🎨 Modern UI with liquid glass effects
- ✨ Interactive animations and transitions
- 📱 Fully responsive design
- 🎯 Timeline visualization for academic achievements
- 💫 Spotlight effects on skill cards
- 🌊 Animated shader background

## Tech Stack

- React 18
- TypeScript
- Create React App
- Liquid Glass React
- Framer Motion
- Custom WebGL Shaders

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
Optimized for best performance.

### `npm test`

Launches the test runner in interactive watch mode.

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using GitHub Integration

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Create React App settings

6. Click "Deploy"

### Configuration

The project includes a `vercel.json` file with:
- Build command: `npm run build`
- Output directory: `build`
- Framework: `create-react-app`
- SPA routing configuration for hash-based navigation

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Vercel Deployment Guide](https://vercel.com/docs)

