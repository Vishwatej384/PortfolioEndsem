# 🚀 Deploying Your Portfolio to Render

Your React portfolio is ready to be deployed! Follow these steps to get your site live on Render.

## Prerequisites

Before you start, make sure you have:
- A [GitHub account](https://github.com)
- A [Render account](https://render.com) (free to create)
- Your portfolio code pushed to GitHub

## Current Portfolio Structure

Your portfolio includes:
- ✅ **Navbar** - Sticky navigation with mobile menu
- ✅ **Hero Section** - Eye-catching introduction
- ✅ **About Section** - About you and your technical skills
- ✅ **Projects Section** - Showcase your work
- ✅ **Footer with Social Links**:
  - GitHub: https://github.com/vishwatej
  - LinkedIn: https://www.linkedin.com/in/vishwatej
  - CodeChef: https://www.codechef.com/users/vishwatej

## Step-by-Step Deployment Guide

### Step 1: Push Your Code to GitHub

```bash
# Initialize GitHub repo (if not already done)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Create a Render Account

1. Go to [render.com](https://render.com)
2. Click "Sign Up"
3. Choose "Sign up with GitHub" for easier integration
4. Authorize Render to access your GitHub account

### Step 3: Deploy Your Portfolio

1. **On Render Dashboard:**
   - Click the **"New +"** button (top-right)
   - Select **"Web Service"**

2. **Connect Repository:**
   - Select your GitHub account
   - Search for and select your **portfolio** repository
   - Click **"Connect"**

3. **Configure Service:**

   | Setting | Value |
   |---------|-------|
   | **Name** | portfolio (or your preferred name) |
   | **Environment** | Node |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `serve -s build` |
   | **Instance Type** | Free (recommended for starting) |

4. **Set Environment Variables (Optional):**
   - Click **"Add Environment Variable"** if needed
   - For basic setup, you don't need any

5. **Deploy:**
   - Click **"Create Web Service"**
   - Render will start building your app (2-5 minutes)
   - Watch the logs for any errors
   - Once complete, you'll get a live URL! 🎉

## Your Site Will Be Live At:

```
https://your-app-name.onrender.com
```

## Auto-Deploy Setup

Your portfolio will automatically redeploy whenever you:
1. Push changes to your GitHub repository
2. Create a new commit on the main branch

## Updating Your Content

After deployment, you can easily update your portfolio:

### Update Social Media Links
Edit **src/components/Footer.js**:
```javascript
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://www.linkedin.com/in/YOUR_PROFILE" target="_blank">
<a href="https://www.codechef.com/users/YOUR_USERNAME" target="_blank">
```

### Update Your Information
1. **Hero Section** → `src/components/Hero.js`
2. **About Section** → `src/components/About.js`
3. **Projects Section** → `src/components/Projects.js`
4. **Contact Info** → `src/components/Footer.js`

### Save and Deploy
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
Render will automatically redeploy your changes!

## Troubleshooting

### Build Failed
- Check that all files are properly saved
- Verify `npm run build` works locally: `cd portfolio && npm run build`
- Check the build logs on Render dashboard

### Site Not Loading
- Wait a few moments for the deployment to complete
- Clear your browser cache (Ctrl+Shift+Delete)
- Check the Render logs for runtime errors

### Social Links Not Working
- Ensure the URLs are correct and include `https://`
- Check that `target="_blank"` is set for external links

## Local Testing (Optional)

Test your portfolio locally before deploying:

```bash
# Install dependencies
npm install

# Start development server
npm start
# Opens at http://localhost:3000

# Or test production build
npm run build
npm install -g serve
serve -s build
# Opens at http://localhost:3000
```

## Custom Domain (Optional)

To use a custom domain:
1. On Render, go to your service settings
2. Find "Custom Domains"
3. Add your domain
4. Follow DNS configuration steps

## Monitor Your Deployment

On Render Dashboard:
- View real-time logs
- Monitor application performance
- Check deployment history
- Manage environment variables

## Next Steps

1. **Add Projects**
   - Edit `src/components/Projects.js` with your real projects
   - Add GitHub links to each project

2. **Customize Styling**
   - Modify colors in CSS files
   - Update fonts and layouts

3. **Add More Sections**
   - Experience/Timeline
   - Blog section
   - Contact form

4. **Performance**
   - Add image optimization
   - Implement lazy loading
   - Use React lazy code splitting

## Support Resources

- **Render Docs**: https://render.com/docs
- **React Docs**: https://react.dev
- **GitHub Pages**: For alternative hosting option

---

## Quick Commands Reference

```bash
# Local development
npm start

# Build for production
npm run build

# Git operations
git add .
git commit -m "Your message"
git push origin main

# Test production build locally
serve -s build
```

---

🎉 **Congratulations!** Your portfolio is now live and accessible to the world!

**Your Portfolio URL:** `https://your-app-name.onrender.com`

**Share with:** LinkedIn, GitHub bio, email signature, job applications, etc.

---

**Last Updated:** May 1, 2026  
**Portfolio Status:** ✅ Ready for Production
