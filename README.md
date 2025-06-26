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
