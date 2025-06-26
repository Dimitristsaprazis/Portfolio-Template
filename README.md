# Portfolio-Template

A modern, responsive, and visually stunning portfolio built with Vite, Vue 3, and Tailwind CSS. Perfect for showcasing your work and skills on Upwork or any freelance platform.

## Features
- Responsive, minimal design
- Hero, About, Projects, and Contact sections
- Built with Tailwind CSS
- Vue.js for interactivity
- Easy to customize

## Getting Started

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```

## Customization
- Edit `src/App.vue` for main sections
- Update `src/assets` for images and styles
- Add a meta description in `index.html` for SEO:
  ```html
  <meta name="description" content="[Your Name] - Professional Portfolio" />
  ```

## Customization Guide

### 1. Update Your Personal Info
- Open `src/config.js`.
- Edit the `config` object to set your name, tagline, about, skills, experience, testimonials, and social links.
- Example:
  ```js
  name: 'Your Name',
  tagline: 'Web Developer',
  social: [
    { icon: 'github', url: 'https://github.com/yourusername' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    { icon: 'email', url: 'mailto:your@email.com' }
  ],
  ```

### 2. Change Your Profile Image
- Open `src/components/HeroSection.vue`.
- Find the `<img src=...>` tag and replace the URL with your own image link (or use a local image in `src/assets`).
- Example:
  ```html
  <img src="/src/assets/your-photo.jpg" ... >
  ```

### 3. Change Styles for Each Section
- Each section component (e.g., `HeroSection.vue`, `AboutSection.vue`, etc.) has its own `<style scoped>` block at the bottom.
- Edit these blocks to customize colors, spacing, animations, etc., for that section only.

### 4. Change Fonts
- To use a custom font, edit `tailwind.config.js` to add your font to the `theme.extend.fontFamily` section.
- Import your font in `src/assets/main.css`.
- Example in `tailwind.config.js`:
  ```js
  theme: {
    extend: {
      fontFamily: {
        sans: ['YourFont', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  ```
- Example in `main.css`:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
  body {
    font-family: 'YourFont', ui-sans-serif, system-ui;
  }
  ```

### 5. Edit or Add Sections
- Each main section is a component in `src/components/` (e.g., `HeroSection.vue`, `AboutSection.vue`, etc.).
- To add a new section, create a new component and import/use it in `App.vue`.
- To remove a section, remove its import and usage from `App.vue`.

### 6. Update Social Links
- Edit the `social` array in `src/config.js` with your real URLs.
- The label under each icon will always say: `github`, `linkedin`, `email` (not your actual email or URL).

### 7. Best Practices
- Keep your config and assets (images, etc.) organized in `src/config.js` and `src/assets/`.
- Use `<style scoped>` in components to avoid style conflicts.
- Use Tailwind utility classes for rapid styling and consistency.
- Test your site on both desktop and mobile for best results.

---

If you have any questions or want to further customize your portfolio, feel free to open an issue or contribute!

## How to Add Your Real Social Media and Email Links

To update your social media and email links on your portfolio:

1. Open `src/App.vue` in your code editor.
2. Find the `config` object near the top of the `<script>` section.
3. Edit the `social` array with your real links. For example:

```js
social: [
  { icon: 'github', url: 'https://github.com/yourusername' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
  { icon: 'email', url: 'mailto:your@email.com' }
],
```

- For **GitHub**, use your real GitHub profile URL.
- For **LinkedIn**, use your real LinkedIn profile URL.
- For **Email**, use `mailto:your@email.com` (replace with your real email address).

The labels on the page will always say: `github`, `linkedin`, `email`, but the links will go to your real profiles or open your real email address.

## License
MIT
