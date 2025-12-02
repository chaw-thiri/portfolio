# Portfolio Website Setup Guide

This is a comprehensive guide to customize and deploy your elegant portfolio website.

## ✨ Features

- 🎨 Modern, minimalist design with elegant gold and red accents
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive for all devices
- ⚡ Smooth scrolling and animations
- 🤖 AI chatbot assistant
- 📧 Contact form integration
- 🚀 Optimized for GitHub Pages

## 🛠️ Technologies Used

- React + Vite
- Styled Components
- Framer Motion (animations)
- Formspree (contact form)
- React Icons

## 📝 Customization Guide

### 1. Update Your Personal Information

Edit `/src/data/portfolioData.js` to add your information:

#### Personal Info
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  tagline: "Your tagline",
  email: "your.email@example.com",
  phone: "+1 (234) 567-8900",
  location: "City, Country",
  bio: "Your bio...",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // ... add other social links
  },
  image: "/profile.jpg", // Add your image to /public folder
};
```

#### Skills
Update the `skills` object with your technologies and expertise areas.

#### Projects
Add your projects with:
- Title and description
- Technologies used
- GitHub and demo links
- Project images (add to `/public/projects` folder)

#### Datasets
If you have published datasets, add them here with:
- Title and description
- DOI and download links
- Size and format information

#### Publications
Add your research papers and publications:
- Title, authors, and venue
- Abstract and tags
- Citation count
- Links to papers

#### Experience & Education
Add your work experience and education:
- Job titles and organizations
- Dates and locations
- Key highlights and achievements

#### Certifications
List your professional certifications:
- Certification name and issuer
- Credential ID and verification link
- Related skills

### 2. Add Your Images

Place your images in the `/public` folder:
- `/public/profile.jpg` - Your profile picture
- `/public/projects/` - Project screenshots
- `/public/certifications/` - Certification badges
- `/public/logos/` - Company/university logos

### 3. Configure Contact Form

1. Go to [Formspree](https://formspree.io/) and sign up
2. Create a new form
3. Copy your form ID
4. Update `/src/sections/Contact.jsx`:
   ```javascript
   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
   ```

### 4. Customize Theme Colors

Edit `/src/styles/theme.js` to change the color scheme:

```javascript
accent: {
  gold: {
    primary: '#D4AF37', // Change gold accent
    // ...
  },
  red: {
    primary: '#8B0000', // Change red accent
    // ...
  },
}
```

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `/dist` folder.

## 🌐 Deploying to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - The workflow will automatically deploy your site on every push to main

3. **Update base path (if needed):**
   - If deploying to `username.github.io`, keep `base: '/'` in `vite.config.js`
   - If deploying to a repository (e.g., `username.github.io/portfolio`), update:
     ```javascript
     base: '/portfolio/', // Your repository name
     ```

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy script to `package.json`:**
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🎨 Customizing Styles

### Changing Fonts
Edit `/src/styles/theme.js`:
```javascript
fonts: {
  heading: '"Your Heading Font", serif',
  body: '"Your Body Font", sans-serif',
}
```

Don't forget to import the fonts in `/src/index.css`.

### Adjusting Layout
- Maximum content width is set to `1200px` in most sections
- Adjust in each section's Container styled component

### Modifying Animations
- Edit animation variants in each section component
- Framer Motion documentation: https://www.framer.com/motion/

## 🤖 Chatbot Customization

The chatbot is a simple rule-based assistant. To enhance it:

1. **Add more response patterns** in `/src/components/Chatbot.jsx`
2. **Integrate with AI API** (OpenAI, etc.) for advanced responses
3. **Update `chatbotKnowledge`** in `portfolioData.js`

## 📱 Responsive Design

The site is responsive by default. Breakpoints are defined in `/src/styles/theme.js`:

```javascript
breakpoints: {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
}
```

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in the `/public` folder
- Use paths starting with `/` (e.g., `/profile.jpg`)

### Contact form not working
- Verify Formspree ID is correct
- Check form is enabled in Formspree dashboard

### Deployment issues
- Ensure GitHub Pages is enabled in repository settings
- Check GitHub Actions workflow logs for errors
- Verify `base` path in `vite.config.js` is correct

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Styled Components](https://styled-components.com/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Support

If you encounter any issues or have questions, please open an issue on GitHub.

## 📄 License

Feel free to use this template for your own portfolio!
