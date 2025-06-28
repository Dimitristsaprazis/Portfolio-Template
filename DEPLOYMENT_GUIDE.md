# Deployment Guide

## 🚀 Pushing to GitHub

### Step 1: Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it: `portfolio-website`
4. Make it **Public** (for free hosting)
5. Don't initialize with README (we already have one)

### Step 3: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

## ✅ Security Check - JSON Files

**All your JSON files are SAFE to push:**

- ✅ `package.json` - Contains only public dependency info
- ✅ `package-lock.json` - Dependency lock file (safe)
- ✅ `vite.config.js` - Build configuration (safe)
- ✅ `tailwind.config.js` - CSS framework config (safe)
- ✅ `postcss.config.js` - CSS processing config (safe)
- ✅ `src/config.js` - Contains only placeholder data (safe)

**No sensitive information found!** Your `.gitignore` is properly configured.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

### Option 2: Netlify (Recommended - Free)
1. Go to [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Option 3: Vercel (Free)
```bash
npm install -g vercel
vercel
```

## 🔧 Before Deploying

### 1. Update Configuration
Edit `src/config.js` with your real information:
```javascript
const config = {
  name: 'Your Real Name',
  tagline: 'Your Real Title',
  about: {
    bio: 'Your real bio...',
    quote: 'Your favorite quote'
  },
  social: [
    { 
      icon: 'github', 
      url: 'https://github.com/YOUR_REAL_USERNAME',
      label: 'GitHub'
    },
    // ... other social links
  ],
  // ... update other sections
};
```

### 2. Update Meta Tags
Edit `index.html`:
- Replace `your-domain.com` with your actual domain
- Update Open Graph images
- Update structured data

### 3. Add Your Profile Image
Replace the placeholder image in components with your actual photo:
```html
<!-- Replace this URL in HeroSection.vue -->
src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80"
```

### 4. Add Resume (Optional)
1. Upload your resume PDF to `public/` folder
2. Update `config.js`:
```javascript
resumeUrl: '/your-resume.pdf'
```

## 📱 Testing Before Deploy

```bash
# Build and test locally
npm run build
npm run preview

# Check for issues
npm run lint  # if ESLint is configured
```

## 🔍 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All links work
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] Dark/light theme toggle works
- [ ] Contact links work
- [ ] SEO meta tags are correct
- [ ] Performance is good (check Lighthouse)

## 🛠️ Custom Domain (Optional)

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records

### GitHub Pages
1. Go to repository Settings > Pages
2. Add custom domain
3. Create `CNAME` file in `public/` folder

## 📊 Performance Optimization

After deployment, check:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🆘 Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (18+)
2. **Images not loading**: Check file paths
3. **Styling issues**: Clear browser cache
4. **Deployment fails**: Check build logs

### Get Help:
- Check browser console for errors
- Review deployment logs
- Test locally first

---

**Your portfolio is now ready for the world! 🌟** 