/**
 * Portfolio Configuration
 * Update this file with your personal information and preferences
 */

const config = {
  // Personal Information
  name: 'Your Name',
  tagline: 'Your Professional Title or Tagline',
  image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80', // Add your image URL here
  
  // About Section
  about: {
    bio: 'Experienced professional with a passion for delivering high-quality results. Skilled in a variety of tools and techniques, always eager to learn and grow. Dedicated to providing value and making a positive impact in every project.',
    quote: '"Strive for excellence in everything you do."'
  },
  
  // Skills Section
  skills: [
    'Skill One', 'Skill Two', 'Skill Three', 'Skill Four', 'Skill Five',
    'Skill Six', 'Skill Seven', 'Skill Eight', 'Skill Nine', 'Skill Ten',
    'Teamwork', 'Problem Solving', 'Communication', 'Adaptability'
  ],
  
  // Experience Section
  experience: [
    {
      year: '2023 - Present',
      title: 'Job Title',
      place: 'Company or Organization',
      description: 'Describe your main responsibilities, achievements, or focus areas in this role.'
    },
    {
      year: '2021 - 2023',
      title: 'Previous Job Title',
      place: 'Previous Company or Organization',
      description: 'Summarize your contributions and skills developed in this position.'
    },
    {
      year: '2019 - 2021',
      title: 'Earlier Job Title',
      place: 'Another Company or Organization',
      description: 'Highlight key projects, learning experiences, or results from this role.'
    }
  ],
  
  // Testimonials Section
  testimonials: [
    {
      quote: 'This professional consistently delivers excellent work and is a valuable asset to any team.',
      author: 'Client or Colleague',
      position: 'Position or Relationship'
    },
    {
      quote: 'A reliable and skilled individual who always meets deadlines and exceeds expectations.',
      author: 'Manager or Peer',
      position: 'Position or Relationship'
    },
    {
      quote: 'Brings creativity, expertise, and a positive attitude to every project.',
      author: 'Supervisor or Partner',
      position: 'Position or Relationship'
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
    'from-gray-900', 'via-gray-800', 'to-gray-900'
  ],
  // Component-specific colors
  components: {
    hero: {
      greeting: '#d1d5db',
      tagline: '#d1d5db',
      scrollText: '#d1d5db',
      scrollBorder: '#9ca3af',
      scrollArrow: '#818cf8',
      name: '#a78bfa',
      description: '#e5e7eb',
      ctaButton: {
        text: '#ffffff',
        background: '#6366f1',
        hover: {
          text: '#ffffff',
          background: '#4f46e5'
        }
      },
      socialLinks: {
        icon: '#d1d5db',
        hover: '#818cf8',
        background: 'rgba(99, 102, 241, 0.9)',
        backgroundHover: '#818cf8'
      }
    },
    about: {
      title: '#a78bfa',
      subtitle: '#c7d2fe',
      bio: '#e5e7eb',
      quote: '#9ca3af',
      accentLine: '#a78bfa',
      skills: {
        title: '#a78bfa',
        skillBadge: {
          text: '#ffffff',
          background: '#6366f1',
          hover: {
            text: '#ffffff',
            background: '#4f46e5'
          }
        }
      }
    },
    experience: {
      title: '#a78bfa',
      year: '#c7d2fe',
      jobTitle: '#f3f4f6',
      company: '#9ca3af',
      description: '#d1d5db',
      timeline: '#a78bfa',
      bullet: '#a78bfa',
    },
    testimonials: {
      title: '#a78bfa',
      quote: '#e5e7eb',
      author: '#c7d2fe',
      icon: '#a78bfa',
      navButton: 'rgba(167, 139, 250, 0.8)',
      navButtonHover: '#6366f1',
    },
    contact: {
      title: '#a78bfa',
      subtitle: '#d1d5db',
      iconLabel: '#c7d2fe',
      iconLabelHover: '#a78bfa',
    }
  }
};

export default config; 