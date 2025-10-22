# Deployment Guide - Ricks Energy Website

## Quick Deployment to Render (Current Method)

### Option 1: Render (Recommended)

**Step 1: Prepare Your Repository**

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ricks Energy website"
   git branch -M main
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

**Step 2: Deploy on Render**

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name:** `ricks-energy-website`
   - **Environment:** `Node`
   - **Region:** Choose closest to Ghana (e.g., Frankfurt or Singapore)
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (or paid for better performance)

5. Click **"Create Web Service"**
6. Wait 5-10 minutes for deployment
7. Your site will be live at: `https://ricks-energy-website.onrender.com`

**Step 3: Configure Environment Variables (Optional)**

In Render dashboard:
- Go to **Environment** tab
- Add any required variables:
  ```
  NODE_ENV=production
  NEXT_PUBLIC_SITE_URL=https://ricks-energy-website.onrender.com
  ```

### Alternative Deployment Options

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ricks Energy website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Option 3: Railway

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Deploy:
   ```bash
   railway login
   railway init
   railway up
   ```

### Option 4: Traditional Hosting (VPS/Dedicated Server)

1. **Build the production version:**
   ```bash
   npm run build
   npm run start
   ```

2. **Using PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ricks-energy" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx as reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

Create a `.env.local` file (or add to Vercel/hosting platform):

```env
DATABASE_URL="your-database-url"
EMAIL_SERVICE_API_KEY="your-email-api-key"
NEXT_PUBLIC_GA_ID="your-analytics-id"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

## Performance Checklist

- [x] Image optimization enabled
- [x] Code splitting configured
- [x] Compression enabled
- [x] Security headers set
- [x] SEO meta tags added
- [ ] Configure CDN (Vercel does this automatically)
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)

## Post-Deployment Steps

1. **Test the deployment:**
   - Check all pages load correctly
   - Test contact form
   - Verify admin dashboard
   - Test on mobile devices

2. **Set up monitoring:**
   - Enable Vercel Analytics (if using Vercel)
   - Add Google Analytics
   - Set up error tracking (Sentry)

3. **Configure DNS:**
   - Add A record or CNAME to your domain registrar
   - Point to your hosting provider

4. **Security:**
   - Change default admin credentials
   - Set up environment variables properly
   - Enable HTTPS (automatic on most platforms)

## Continuous Deployment

Push to GitHub main branch to automatically deploy:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

## Troubleshooting

### Build Errors
- Check Node.js version (requires 18+)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`

### Performance Issues
- Enable caching on CDN
- Optimize images further
- Check bundle size: `npm run analyze`

### Contact Form Not Working
- Verify API routes are deployed
- Check environment variables
- Test API endpoints directly

## Support

For technical support, refer to:
- Next.js docs: https://nextjs.org/docs
- Vercel support: https://vercel.com/support
- Project README.md

---

**Estimated Deployment Time:** 5-10 minutes
**Recommended Platform:** Vercel (zero configuration)