# Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, Tailwind CSS, and Vite. Features a beautiful design with smooth animations, dark/light theme toggle, and mobile-first responsive layout.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional portfolio layout
- 🌙 **Dark/Light Theme**: Toggle between dark and light modes
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎭 **Smooth Animations**: AOS (Animate On Scroll) and custom animations
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 🔧 **Customizable**: Easy to configure through `src/config.js`

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Vue components
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── TestimonialsSection.vue
│   │   └── ContactSection.vue
│   ├── assets/            # CSS and other assets
│   ├── config.js          # Configuration file
│   ├── App.vue           # Main app component
│   └── main.js           # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## ⚙️ Configuration

Edit `src/config.js` to customize your portfolio:

```javascript
const config = {
  // Personal Information
  name: 'Your Name',
  tagline: 'Your Professional Title',
  
  // About Section
  about: {
    bio: 'Your bio here...',
    quote: 'Your favorite quote'
  },
  
  // Skills, Experience, Testimonials, etc.
  // ... see config.js for all options
};
```

### Available Configuration Options

- **Personal Info**: Name, tagline, bio, quote
- **Skills**: Array of your technical and soft skills
- **Experience**: Work history with years, titles, and descriptions
- **Testimonials**: Client/colleague recommendations
- **Social Links**: GitHub, LinkedIn, email, etc.
- **Theme**: Colors, fonts, spacing, and other design options

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)
- `npm run format` - Format code with Prettier (if configured)

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Edit `tailwind.config.js` or use CSS variables
- **Fonts**: Update font families in `config.js`
- **Layout**: Modify component templates in `src/components/`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.vue`
3. Add configuration options to `config.js`

### Theme Customization

The theme system supports:
- Primary, secondary, and accent colors
- Custom font families
- Border radius and spacing
- Custom CSS overrides

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Single column layout with optimized touch interactions
- **Tablet**: Improved spacing and layout adjustments
- **Desktop**: Full two-column layout with enhanced animations

## ♿ Accessibility

This portfolio follows accessibility best practices:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- Color contrast compliance

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

## 🔧 Development

### Code Style

- Use Vue 3 Composition API when possible
- Follow Vue.js style guide
- Use kebab-case for props and events
- Add proper TypeScript types (if using TS)

### Performance Tips

- Optimize images with proper formats and sizes
- Use lazy loading for non-critical images
- Minimize bundle size with code splitting
- Enable gzip compression on your server

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Check the documentation
- Review the configuration examples

---

**Built with ❤️ using Vue.js, Tailwind CSS, and Vite**
