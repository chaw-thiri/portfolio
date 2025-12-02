# 🎨 Elegant Portfolio Website

A modern, luxurious portfolio website built with React, featuring elegant gold and red accents. Perfect for showcasing your projects, research, publications, and professional achievements.

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle between elegant themes
- 📱 **Fully Responsive** - Beautiful on all devices
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🤖 **AI Chatbot** - Interactive assistant for visitors
- 📧 **Contact Form** - Integrated with Formspree
- 🎯 **Sections Included**:
  - About Me
  - Skills & Expertise
  - Featured Projects
  - Published Datasets
  - Research & Publications
  - Experience & Education
  - Certifications
  - Contact

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📝 Customization

### Update Your Information

Edit `/src/data/portfolioData.js` with your personal information:
- Personal details and social links
- Skills and technologies
- Projects and achievements
- Research publications
- Work experience and education
- Certifications and credentials

### Add Your Images

Place images in the `/public` folder:
- `/public/profile.jpg` - Your profile picture
- `/public/projects/` - Project screenshots
- `/public/certifications/` - Certificate images

### Configure Contact Form

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form ID in `/src/sections/Contact.jsx`:
   ```javascript
   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
   ```

## 🎨 Theme Customization

Customize colors in `/src/styles/theme.js`:
```javascript
accent: {
  gold: {
    primary: '#D4AF37', // Your gold accent
  },
  red: {
    primary: '#8B0000', // Your red accent
  },
}
```

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deploy to GitHub Pages

### Quick Deploy

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Under "Build and deployment", select "GitHub Actions"
   - Your site will deploy automatically on every push!

3. **Access your site:**
   - If using `username.github.io` repo: `https://username.github.io`
   - If using project repo: `https://username.github.io/repo-name`

**Important:** If deploying to a project repository (not username.github.io), update `vite.config.js`:
```javascript
base: '/your-repo-name/',
```

### Custom Domain (Optional)

1. Add a `CNAME` file to `/public` with your domain
2. Configure DNS settings at your domain provider
3. Update base path in `vite.config.js` to `/`

## 📚 Detailed Setup Guide

For comprehensive customization instructions, see [SETUP.md](./SETUP.md)

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Formspree** - Contact form handling

## 📱 Responsive Breakpoints

- Mobile: 640px
- Tablet: 768px
- Laptop: 1024px
- Desktop: 1280px

## 🤝 Support

If you encounter issues:
1. Check [SETUP.md](./SETUP.md) for detailed troubleshooting
2. Ensure all dependencies are installed
3. Verify Node.js version (v18+ recommended)

## 📄 License

Free to use for your personal portfolio!

---

Made with ❤️ using React + Vite
