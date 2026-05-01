# 📝 Customization Guide

## Update Your Personal Information

This guide shows you how to customize your portfolio with your actual information.

### 1. Update Social Media Links

**File:** `src/components/Footer.js`

Find these lines and update them with your actual usernames:

```javascript
// GitHub Link
<a href="https://github.com/YOUR_GITHUB_USERNAME" ...>

// LinkedIn Link  
<a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" ...>

// CodeChef Link
<a href="https://www.codechef.com/users/YOUR_CODECHEF_USERNAME" ...>
```

**Example:**
```javascript
<a href="https://github.com/vishwatej" target="_blank">
<a href="https://www.linkedin.com/in/vishwatej-sharma" target="_blank">
<a href="https://www.codechef.com/users/vishwatej" target="_blank">
```

Also update your contact information in the same file:
```javascript
<p>Email: <a href="mailto:your-actual-email@example.com">your-actual-email@example.com</a></p>
<p>Location: Your City, Country</p>
```

---

### 2. Update Hero Section

**File:** `src/components/Hero.js`

```javascript
<h1>Welcome to My Portfolio</h1>
<p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
```

Change to your actual title and role:
```javascript
<h1>Welcome to [Your Name]'s Portfolio</h1>
<p>Your Title | Your Skills | Your Expertise</p>
```

---

### 3. Update About Section

**File:** `src/components/About.js`

Update the description paragraphs:
```javascript
<p>
    I'm a passionate developer with expertise in building modern web applications...
</p>
```

Replace with your actual background and experience.

Update the skills:
```javascript
<span className="skill-tag">React</span>
<span className="skill-tag">JavaScript</span>
// Add your actual skills
```

---

### 4. Add Your Projects

**File:** `src/components/Projects.js`

Replace the sample projects with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of what your project does',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://github.com/your-username/project' // Add your project link
  },
  // Add more projects...
];
```

**Example:**
```javascript
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce app with payment integration',
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: 'https://github.com/vishwatej/ecommerce-platform'
}
```

---

## Color Customization

To change the color scheme, edit these CSS files:

### Main Colors
**Files:** `src/components/Navbar.css`, `src/components/Hero.css`, etc.

Find and replace gradient colors:
```css
/* Current gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your preferred colors */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Popular Color Combinations

**Blue & Purple** (Current):
```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

**Green & Teal**:
```css
linear-gradient(135deg, #11998e 0%, #38ef7d 100%)
```

**Orange & Red**:
```css
linear-gradient(135deg, #ff6b00 0%, #ee0979 100%)
```

**Pink & Purple**:
```css
linear-gradient(135deg, #ec4646 0%, #a371d7 100%)
```

---

## Font Customization

**File:** `src/App.css`

Change the font family:
```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

Popular font choices:
- `'Poppins', sans-serif` - Modern, rounded
- `'Inter', sans-serif` - Clean, professional
- `'Playfair Display', serif` - Elegant, serif
- `'Space Mono', monospace` - Tech, code-like

---

## Navbar Customization

**File:** `src/components/Navbar.js`

Update the logo/title:
```javascript
<h1 className="navbar-logo">Your Name</h1>
```

Update navigation links (if you add new sections):
```javascript
<a href="#your-section" className="nav-link">Section Name</a>
```

---

## Add More Sections

To add new sections (e.g., Experience, Blog, etc.):

1. **Create a new component file:**
   ```bash
   touch src/components/Experience.js
   touch src/components/Experience.css
   ```

2. **Add to App.js:**
   ```javascript
   import Experience from './components/Experience';
   
   function App() {
     return (
       <div className="App">
         <Navbar />
         <Hero />
         <About />
         <Experience />  {/* Add here */}
         <Projects />
         <Footer />
       </div>
     );
   }
   ```

3. **Create the component:**
   ```javascript
   // src/components/Experience.js
   import './Experience.css';
   
   function Experience() {
     return (
       <section id="experience" className="experience">
         <h2>My Experience</h2>
         {/* Your content here */}
       </section>
     );
   }
   
   export default Experience;
   ```

4. **Add styling in Experience.css**

---

## Add Images/Profile Picture

To add a profile image:

1. **Add image to public folder:**
   ```bash
   cp your-image.jpg public/images/profile.jpg
   ```

2. **Use in a component:**
   ```javascript
   <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Profile" />
   ```

---

## Mobile Responsiveness

All components are already mobile-responsive! But to test:

1. Open in browser
2. Press `F12` (Developer Tools)
3. Click mobile icon (top-left)
4. Select different device sizes

---

## Commit Your Changes

After customizing, save and push your changes:

```bash
# See what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Customize portfolio with personal information"

# Push to GitHub
git push origin main
```

**Your deployed site on Render will automatically update!** ✨

---

## Quick Customization Checklist

- [ ] Update social media links (GitHub, LinkedIn, CodeChef)
- [ ] Update about section with your bio
- [ ] Add/update your projects
- [ ] Update contact email
- [ ] Update location
- [ ] Change color scheme (optional)
- [ ] Add profile picture (optional)
- [ ] Commit changes
- [ ] Verify deployment updated

---

## Need Help?

Refer to the component files:
- `src/components/Navbar.js` - Navigation
- `src/components/Hero.js` - Introduction
- `src/components/About.js` - About & Skills
- `src/components/Projects.js` - Projects
- `src/components/Footer.js` - Contact & Social Links

---

**Happy Customizing!** 🎨
