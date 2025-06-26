const config = {
  name: 'Your Name',
  tagline: 'Your Profession or Tagline',
  about: {
    bio: 'Write your short bio here. Share your passions, what drives you, and what makes you unique. Mention your values, your approach to work, or anything you want people to know about you.',
    quote: 'Put your favorite quote or motto here.'
  },
  skills: [
    'JavaScript', 'Vue.js', 'CSS', 'HTML', 'Teamwork', 'Creativity', 'Problem Solving'
  ],
  experience: [
    { year: '2023', title: 'Frontend Developer', place: 'Company A', description: 'Worked on modern web apps.' },
    { year: '2021', title: 'Web Designer', place: 'Freelance', description: 'Designed and built websites for clients.' }
  ],
  testimonials: [
    { quote: 'A fantastic collaborator!', author: 'Jane Doe' },
    { quote: 'Delivers on time and with quality.', author: 'John Smith' }
  ],
  social: [
    { icon: 'github', url: 'https://github.com/' },
    { icon: 'linkedin', url: 'https://linkedin.com/' },
    { icon: 'email', url: 'mailto:your@email.com' }
  ],
  resumeUrl: '#', // Set to your resume PDF or leave as '#' to hide
  showExperience: true,
  showTestimonials: true,
  showResume: true,
  showThemeToggle: true
};

export default config; 