# QKart Vercel Deployment Guide

## Overview
QKart is a full-stack application with:
- **Frontend**: React (runs on Vercel)
- **Backend**: Node.js/Express (needs separate deployment)

## Deployment Strategy

### Option 1: Deploy Frontend to Vercel + Backend Separately (Recommended)

#### Step 1: Push Changes to GitHub
```bash
git add .
git commit -m "Setup Vercel deployment"
git push origin main
```

#### Step 2: Deploy Frontend to Vercel

1. **Connect GitHub to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository: `m-v-nagaraju0007-ME_QKART_FRONTEND_VV2`

2. **Configure Build Settings:**
   - Framework: React
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Node Version: 18.x or 20.x

3. **Set Environment Variables:**
   - Add variable: `REACT_APP_BACKEND_URL` = `https://your-backend-url.com/api/v1`
   - (Update this after deploying your backend)

4. **Deploy**
   - Click Deploy
   - Wait for build to complete

#### Step 3: Deploy Backend

**Option A: Deploy to Render (Free tier available)**
1. Go to https://render.com
2. Create new Web Service
3. Connect your GitHub repo
4. Build Command: `cd backend && npm install`
5. Start Command: `cd backend && node index.js`
6. Set Environment Variables:
   - `PORT` = `8082` (or leave default)
7. Note your backend URL (e.g., `https://qkart-backend.onrender.com`)

**Option B: Deploy to Railway**
1. Go to https://railway.app
2. Create new project
3. Deploy from GitHub
4. Add backend service
5. Note your backend URL

#### Step 4: Update Frontend with Backend URL

1. Go to Vercel project settings
2. Update `REACT_APP_BACKEND_URL` environment variable with your backend URL
3. Redeploy the frontend

### Option 2: Deploy Full Stack to Vercel (Using Serverless Functions)

This requires restructuring the backend as Vercel serverless functions. Contact if you need help with this approach.

## What Needs to Change

### In Frontend Code
The app currently uses `ipConfig.json` with hardcoded IPs. For production:

```javascript
// src/App.js should use environment variable:
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8082/api/v1';
export const config = {
  endpoint: backendUrl
};
```

### Backend Configuration
- Ensure CORS is properly configured
- Backend should listen on `process.env.PORT` or default to 8082
- No hardcoded IPs

## Current Status
✅ Frontend build ready
✅ Backend API ready
✅ vercel.json configuration created

## Next Steps
1. Update App.js to use environment variables
2. Push all changes to GitHub
3. Deploy to Vercel
4. Deploy backend to Render/Railway
5. Update environment variables with production URLs

## Environment Variables (Vercel)

For Frontend:
- `REACT_APP_BACKEND_URL` = Your backend production URL

For Backend (if using Vercel serverless):
- `JWT_SECRET` = Your JWT secret key
- `NODE_ENV` = `production`

## Troubleshooting

**CORS Errors:**
- Ensure backend allows your Vercel domain
- Update backend CORS configuration with Vercel URL

**API Connection Issues:**
- Verify `REACT_APP_BACKEND_URL` is set correctly
- Check backend is running and accessible
- Test API endpoint directly in browser

**Build Failures:**
- Check Node version compatibility
- Verify all dependencies are installed
- Review Vercel build logs
