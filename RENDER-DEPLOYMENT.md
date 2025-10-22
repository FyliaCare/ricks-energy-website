# 🚀 Render Deployment - Step by Step Guide

## Prerequisites
- GitHub account
- Render account (free at render.com)
- Git installed on your computer

## Step 1: Push Code to GitHub

1. **Open PowerShell in your project directory:**
   ```powershell
   cd "c:\Users\Jay Monty\Desktop\Projects\Ricks Energy LTD\ricks-energy-website"
   ```

2. **Check Git status:**
   ```powershell
   git status
   ```

3. **If not initialized, initialize Git:**
   ```powershell
   git init
   ```

4. **Add all files:**
   ```powershell
   git add .
   ```

5. **Commit changes:**
   ```powershell
   git commit -m "Ready for Render deployment"
   ```

6. **Create GitHub repository:**
   - Go to https://github.com/new
   - Name: `ricks-energy-website`
   - Make it Private or Public
   - Don't initialize with README
   - Click "Create repository"

7. **Connect and push to GitHub:**
   ```powershell
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ricks-energy-website.git
   git push -u origin main
   ```
   (Replace YOUR-USERNAME with your actual GitHub username)

## Step 2: Deploy on Render

1. **Go to Render:**
   - Visit https://render.com
   - Click "Get Started" or "Sign In"
   - Sign in with GitHub

2. **Create New Web Service:**
   - Click "New +" button (top right)
   - Select "Web Service"

3. **Connect Repository:**
   - Click "Connect" next to your `ricks-energy-website` repository
   - If you don't see it, click "Configure account" to grant access

4. **Configure Service:**
   Fill in these settings:
   
   **Basic Settings:**
   - **Name:** `ricks-energy-website` (or your preferred name)
   - **Region:** `Frankfurt (EU Central)` (closest to Ghana)
   - **Branch:** `main`
   - **Root Directory:** (leave blank)
   
   **Build & Deploy:**
   - **Runtime:** `Node`
   - **Build Command:** 
     ```
     npm install && npm run build
     ```
   - **Start Command:**
     ```
     npm start
     ```
   
   **Instance Type:**
   - Select `Free` (or paid plan for better performance)

5. **Advanced Settings (Optional):**
   - Click "Advanced"
   - **Auto-Deploy:** `Yes` (enabled by default)
   - **Health Check Path:** `/`

6. **Environment Variables (if needed):**
   - Click "Add Environment Variable"
   - Add:
     ```
     NODE_ENV = production
     ```

7. **Create Web Service:**
   - Click "Create Web Service"
   - Render will start building your app

## Step 3: Wait for Deployment

- **Build time:** 5-10 minutes
- **You'll see:**
  - Installing dependencies...
  - Building Next.js app...
  - Starting server...
  - Live ✅

## Step 4: Access Your Site

- Your site will be available at:
  ```
  https://ricks-energy-website.onrender.com
  ```
  (The exact URL will be shown in Render dashboard)

## Step 5: Custom Domain (Optional)

1. **In Render Dashboard:**
   - Go to your service
   - Click "Settings"
   - Scroll to "Custom Domains"
   - Click "Add Custom Domain"

2. **Add Your Domain:**
   - Enter: `www.ricksenergy.co`
   - Follow DNS configuration instructions

3. **Update DNS at your registrar:**
   - Add CNAME record:
     ```
     www.ricksenergy.co -> ricks-energy-website.onrender.com
     ```

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure `package.json` has correct scripts
- Try locally: `npm install && npm run build`

### Site Not Loading
- Check if service is "Live" in dashboard
- View logs for errors
- Restart service from dashboard

### Slow Performance on Free Tier
- Free tier spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- Upgrade to paid tier ($7/month) for always-on service

## Updates & Continuous Deployment

Every time you push to GitHub, Render will automatically rebuild:

```powershell
git add .
git commit -m "Update website"
git push origin main
```

Render will detect the push and deploy automatically! 🎉

## Important Notes

✅ **Free Tier Limitations:**
- Spins down after 15 minutes of inactivity
- 750 hours/month free compute
- Shared IP address

✅ **Recommended for Production:**
- Upgrade to Starter plan ($7/month)
- Always-on service
- Better performance
- Custom domains included

## Need Help?

- **Render Docs:** https://render.com/docs
- **Render Support:** https://render.com/support
- **Community:** https://community.render.com

---

**Estimated Time:** 15-20 minutes total
**Cost:** Free (or $7/month for better performance)
