/**
 * Portfolio Configuration
 * Update this file with your personal information and preferences
 */

const config = {
  // Personal Information
  name: 'Dimitris Tsaprazis',
  tagline: 'Full Stack Developer & UI/UX Designer',
  
  // About Section
  about: {
    bio: 'Passionate developer with expertise in modern web technologies. I specialize in creating beautiful, functional, and user-centered digital experiences. When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.',
    quote: '"The best code is no code at all." - Jeff Atwood'
  },
  
  // Skills Section
  skills: [
    'JavaScript', 'Vue.js', 'React', 'Node.js', 'TypeScript', 
    'CSS/SCSS', 'HTML5', 'Tailwind CSS', 'Git', 'Docker',
    'Teamwork', 'Problem Solving', 'UI/UX Design', 'Agile'
  ],
  
  // Experience Section
  experience: [
    {
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      place: 'Tech Company',
      description: 'Leading frontend development for enterprise applications using Vue.js and modern web technologies.'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      place: 'Startup',
      description: 'Built and maintained web applications from concept to deployment, working with React, Node.js, and cloud services.'
    },
    {
      year: '2019 - 2021',
      title: 'Web Designer & Developer',
      place: 'Freelance',
      description: 'Designed and developed custom websites for various clients, focusing on user experience and modern design principles.'
    }
  ],
  
  // Testimonials Section
  testimonials: [
    {
      quote: 'Dimitris is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
      author: 'Sarah Johnson',
      position: 'Project Manager'
    },
    {
      quote: 'Working with Dimitris was a pleasure. He not only delivered on time but exceeded our expectations with innovative solutions.',
      author: 'Michael Chen',
      position: 'CTO'
    },
    {
      quote: 'Dimitris brings creativity and technical expertise to every project. His code is clean, maintainable, and well-documented.',
      author: 'Emily Rodriguez',
      position: 'Senior Developer'
    }
  ],
  
  // Social Links
  social: [
    { 
      icon: 'github', 
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    { 
      icon: 'linkedin', 
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    { 
      icon: 'email', 
      url: 'mailto:your.email@example.com',
      label: 'Email'
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/yourusername',
      label: 'Twitter'
    }
  ],
  
  // Resume Configuration
  resumeUrl: '#', // Set to your resume PDF URL or leave as '#' to hide
  showResume: true,
  
  // Section Visibility
  showExperience: true,
  showTestimonials: true,
  showThemeToggle: true,
  
  // Background gradient colors (Tailwind classes or hex values)
  backgroundGradient: [
    // Example using Tailwind classes:
    'from-gray-900', 'via-gray-800', 'to-gray-900'
    // Or use hex values:
    // '#18181b', '#23272f', '#18181b'
  ],
  // Component-specific colors
  components: {
    hero: {
      // Hero section specific colors
      greeting: '#d1d5db',    // Hero greeting text (gray-300)
      tagline: '#d1d5db',     // Hero tagline text (gray-300)
      scrollText: '#d1d5db',  // Scroll down text (gray-300)
      scrollBorder: '#9ca3af', // Scroll border (gray-400)
      scrollArrow: '#818cf8', // Scroll arrow (indigo-400)
      name: '#a78bfa',        // Hero name text
      description: '#e5e7eb', // Hero description text
      ctaButton: {
        text: '#ffffff',      // CTA button text color
        background: '#6366f1', // CTA button background
        hover: {
          text: '#ffffff',    // CTA button hover text
          background: '#4f46e5' // CTA button hover background
        }
      },
      socialLinks: {
        icon: '#d1d5db',      // Social icon color
        hover: '#818cf8',     // Social icon hover color
        background: 'rgba(99, 102, 241, 0.9)', // Social icon background
        backgroundHover: '#818cf8' // Social icon background hover
      }
    },
    about: {
      // About section specific colors
      title: '#a78bfa',       // About title (indigo-400)
      subtitle: '#c7d2fe',    // About subtitle (indigo-300)
      bio: '#e5e7eb',         // Bio text (gray-200)
      quote: '#9ca3af',       // Quote text (gray-400)
      accentLine: '#a78bfa',  // Accent line (indigo-400)
      skills: {
        title: '#a78bfa',     // Skills title
        skillBadge: {
          text: '#ffffff',    // Skill badge text
          background: '#6366f1', // Skill badge background
          hover: {
            text: '#ffffff',  // Skill badge hover text
            background: '#4f46e5' // Skill badge hover background
          }
        }
      }
    },
    experience: {
      title: '#a78bfa',       // Experience title (indigo-400)
      year: '#c7d2fe',        // Year text (indigo-300)
      jobTitle: '#f3f4f6',    // Job title (gray-100)
      company: '#9ca3af',     // Company name (gray-400)
      description: '#d1d5db', // Description text (gray-300)
      timeline: '#a78bfa',    // Timeline line (indigo-400)
      bullet: '#a78bfa',      // Timeline bullet (indigo-400)
    },
    testimonials: {
      title: '#a78bfa',       // Testimonials title (indigo-400)
      quote: '#e5e7eb',       // Quote text (gray-200)
      author: '#c7d2fe',      // Author name (indigo-300)
      icon: '#a78bfa',        // Quote icon (indigo-400)
      navButton: 'rgba(167, 139, 250, 0.8)', // Nav button background
      navButtonHover: '#6366f1', // Nav button hover
    },
    contact: {
      title: '#a78bfa',       // Contact title (indigo-400)
      subtitle: '#d1d5db',    // Contact subtitle (gray-300)
      iconLabel: '#c7d2fe',   // Icon label (indigo-200)
      iconLabelHover: '#a78bfa', // Icon label hover (indigo-400)
    }
  }
};

export default config; 