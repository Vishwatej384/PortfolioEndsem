# Portfolio Website

A professional portfolio website built with React, showcasing my projects and skills with links to my GitHub, LinkedIn, and CodeChef profiles.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Social Links**: Direct links to GitHub, LinkedIn, and CodeChef
- **Project Showcase**: Display of featured projects with technologies used
- **Skills Section**: Highlights technical expertise
- **Smooth Scrolling**: Seamless navigation between sections

## Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment on Render

### Steps to Deploy:

1. **Push to GitHub**
   - Create a GitHub repository
   - Push your portfolio code to the repository

2. **Create a Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

3. **Connect Repository**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository containing your portfolio

4. **Configure Build & Deploy Settings**
   - **Name**: Portfolio (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start` or `serve -s build`
   - **Instance Type**: Free (for development) or Starter (for production)

5. **Environment Variables** (if needed)
   - Add any required environment variables in the settings

6. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy your application
   - Your site will be live at: `https://your-app-name.onrender.com`

### Setting Up Auto-Deploy
- Render automatically redeploys on every push to your main/master branch

## Updating Social Links

To update your social media links, edit [src/components/Footer.js](src/components/Footer.js):

```javascript
// Update the href attributes:
<a href="https://github.com/YOUR_GITHUB_USERNAME" ... >
<a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" ... >
<a href="https://www.codechef.com/users/YOUR_CODECHEF_USERNAME" ... >
```

Also update the contact information in the Footer component with your email and location.

## Customization

### Update Your Information
- **Hero Section**: Edit [src/components/Hero.js](src/components/Hero.js)
- **About Section**: Edit [src/components/About.js](src/components/About.js)
- **Projects Section**: Edit [src/components/Projects.js](src/components/Projects.js)
- **Contact/Footer**: Edit [src/components/Footer.js](src/components/Footer.js)

### Modify Styling
- Global styles: [src/App.css](src/App.css)
- Component-specific styles: Files in [src/components/](src/components/)

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **CSS3** - Modern styling with animations and gradients
- **Font Awesome** - Icon library
- **Create React App** - Build tooling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

- **GitHub**: [github.com/vishwatej](https://github.com/vishwatej)
- **LinkedIn**: [linkedin.com/in/vishwatej](https://www.linkedin.com/in/vishwatej)
- **CodeChef**: [codechef.com/users/vishwatej](https://www.codechef.com/users/vishwatej)

---
Built with ❤️ using React
