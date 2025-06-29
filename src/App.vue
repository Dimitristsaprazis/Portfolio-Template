<template>
  <div
    class="min-h-screen transition-colors duration-500"
    :class="gradientClassList"
    :style="{ ...gradientStyle, ...fontColorVars }"
  >
    <div class="flex flex-col gap-y-12 md:gap-y-24">
      <HeroSection
        :displayed-greeting="displayedGreeting"
        :displayed-name="displayedName"
        :displayed-tagline="displayedTagline"
        :typing-step="typingStep"
        :typing-done="typingDone"
        :hero-left-visible="heroLeftVisible"
        :hero-right-visible="heroRightVisible"
        :resume-url="resumeUrl"
        :show-resume="showResume"
        :theme="theme"
        :image="image"
        @scroll-to-about="scrollToAbout"
      />
      <AboutSection :about="about" :skills="skills" :theme="theme" />
      <ExperienceSection :experience="experience" :show-experience="showExperience" :theme="theme" />
      <TestimonialsSection
        :testimonials="testimonials"
        :show-testimonials="showTestimonials"
        :current-testimonial="currentTestimonial"
        :theme="theme"
        @go-to-testimonial="goToTestimonial"
        @touch-start="onTouchStart"
        @touch-move="onTouchMove"
        @touch-end="onTouchEnd"
      />
      <ContactSection :social="social" :theme="theme" />
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMotion } from '@vueuse/motion';
import { 
  AcademicCapIcon, 
  UsersIcon, 
  LightBulbIcon, 
  ArrowPathIcon, 
  ChatBubbleLeftRightIcon, 
  StarIcon 
} from '@heroicons/vue/24/outline';
import { 
  NCard, 
  NButton, 
  NTag, 
  NGrid, 
  NGridItem 
} from 'naive-ui';
import config from './config.js';
import HeroSection from './components/HeroSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';
import AboutSection from './components/AboutSection.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    ExperienceSection,
    TestimonialsSection,
    ContactSection,
    AboutSection,
    AcademicCapIcon,
    UsersIcon,
    LightBulbIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    NCard, 
    NButton, 
    NTag, 
    NGrid, 
    NGridItem
  },
  data() {
    return {
      theme: config,
      ...config,
      displayedGreeting: '',
      displayedName: '',
      displayedTagline: '',
      typingStep: 0, // 0: greeting, 1: name, 2: tagline
      typingDone: false,
      heroLeftVisible: false,
      heroRightVisible: false,
      windowWidth: window.innerWidth,
      currentTestimonial: 0,
      touchStartX: 0,
      touchEndX: 0,
      greetingWords: [],
      nameWords: [],
      taglineWords: [],
      greetingWordIndex: 0,
      nameWordIndex: 0,
      taglineWordIndex: 0,
      currentWord: '',
      currentLetterIndex: 0,
      typingTarget: '',
    };
  },
  mounted() {
    this.greetingWords = [`Hi,`, `I'm`];
    this.nameWords = this.name.trim().split(/\s+/);
    this.taglineWords = this.tagline.trim().split(/\s+/);
    this.initializeApp();
  },
  beforeUnmount() {
    this.cleanup();
  },
  updated() {
    AOS.refresh();
  },
  computed: {
    gradientClassList() {
      // If all values start with 'from-', 'via-', or 'to-', use as Tailwind classes
      if (
        Array.isArray(this.backgroundGradient) &&
        this.backgroundGradient.every(c => typeof c === 'string' && (c.startsWith('from-') || c.startsWith('via-') || c.startsWith('to-')))
      ) {
        return ['bg-gradient-to-br', ...this.backgroundGradient].join(' ');
      }
      return '';
    },
    gradientStyle() {
      // If all values are hex colors, use inline style
      if (
        Array.isArray(this.backgroundGradient) &&
        this.backgroundGradient.every(c => typeof c === 'string' && c.startsWith('#'))
      ) {
        const stops = this.backgroundGradient;
        if (stops.length === 3) {
          return {
            background: `linear-gradient(135deg, ${stops[0]}, ${stops[1]}, ${stops[2]})`
          };
        } else if (stops.length === 2) {
          return {
            background: `linear-gradient(135deg, ${stops[0]}, ${stops[1]})`
          };
        }
      }
      return {};
    },
    fontColorVars() {
      const c = this.theme?.fontColors || {};
      return {
        '--font-base': c.base || '#fff',
        '--font-link': c.link || '#6366f1',
        '--font-button': c.button || '#fff',
        '--font-hover': c.hover || '#f59e42',
      };
    }
  },
  methods: {
    /**
     * Initialize the application
     */
    initializeApp() {
      // Initialize animations
      this.initializeAnimations();
      
      // Add event listeners
      this.addEventListeners();
      
      // Start typing animation
      this.startTypingAnimation();
    },

    /**
     * Initialize AOS animations
     */
    initializeAnimations() {
      AOS.init({
        duration: 900,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
      });
    },

    /**
     * Add event listeners
     */
    addEventListeners() {
      window.addEventListener('resize', this.handleResize);
    },

    /**
     * Cleanup event listeners
     */
    cleanup() {
      window.removeEventListener('resize', this.handleResize);
    },

    /**
     * Start typing animation sequence
     */
    startTypingAnimation() {
      setTimeout(() => {
        this.heroLeftVisible = true;
        this.heroRightVisible = true;
        setTimeout(this.typeWriter, 900);
      }, 200);
    },

    /**
     * Typewriter effect for hero text (letter-by-letter, word-by-word)
     */
    typeWriter() {
      if (this.typingStep === 0) {
        // Greeting
        if (this.greetingWordIndex < this.greetingWords.length) {
          if (this.currentLetterIndex === 0) {
            this.currentWord = this.greetingWords[this.greetingWordIndex];
          }
          if (this.currentLetterIndex < this.currentWord.length) {
            this.displayedGreeting += this.currentWord[this.currentLetterIndex];
            this.currentLetterIndex++;
            setTimeout(this.typeWriter, 60);
          } else {
            this.displayedGreeting += (this.greetingWordIndex < this.greetingWords.length - 1 ? ' ' : '');
            this.greetingWordIndex++;
            this.currentLetterIndex = 0;
            setTimeout(this.typeWriter, 350);
          }
        } else {
          this.typingStep = 1;
          this.currentLetterIndex = 0;
          setTimeout(this.typeWriter, 600);
        }
      } else if (this.typingStep === 1) {
        // Name
        if (this.nameWordIndex < this.nameWords.length) {
          if (this.currentLetterIndex === 0) {
            this.currentWord = this.nameWords[this.nameWordIndex];
          }
          if (this.currentLetterIndex < this.currentWord.length) {
            this.displayedName += this.currentWord[this.currentLetterIndex];
            this.currentLetterIndex++;
            setTimeout(this.typeWriter, 70);
          } else {
            this.displayedName += (this.nameWordIndex < this.nameWords.length - 1 ? ' ' : '');
            this.nameWordIndex++;
            this.currentLetterIndex = 0;
            setTimeout(this.typeWriter, 400);
          }
        } else {
          this.typingStep = 2;
          this.currentLetterIndex = 0;
          setTimeout(this.typeWriter, 700);
        }
      } else if (this.typingStep === 2) {
        // Tagline
        if (this.taglineWordIndex < this.taglineWords.length) {
          if (this.currentLetterIndex === 0) {
            this.currentWord = this.taglineWords[this.taglineWordIndex];
          }
          if (this.currentLetterIndex < this.currentWord.length) {
            this.displayedTagline += this.currentWord[this.currentLetterIndex];
            this.currentLetterIndex++;
            setTimeout(this.typeWriter, 55);
          } else {
            this.displayedTagline += (this.taglineWordIndex < this.taglineWords.length - 1 ? ' ' : '');
            this.taglineWordIndex++;
            this.currentLetterIndex = 0;
            setTimeout(this.typeWriter, 300);
          }
        } else {
          this.typingDone = true;
        }
      }
    },

    /**
     * Handle window resize
     */
    handleResize() {
      this.windowWidth = window.innerWidth;
    },

    /**
     * Scroll to about section
     */
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    },

    /**
     * Navigate to specific testimonial
     */
    goToTestimonial(idx) {
      if (idx < 0 || idx >= this.testimonials.length) return;
      this.currentTestimonial = idx;
    },

    /**
     * Handle touch start for swipe gestures
     */
    onTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },

    /**
     * Handle touch move for swipe gestures
     */
    onTouchMove(e) {
      this.touchEndX = e.changedTouches[0].screenX;
    },

    /**
     * Handle touch end for swipe gestures
     */
    onTouchEnd() {
      const dx = this.touchEndX - this.touchStartX;
      const swipeThreshold = 50;
      
      if (Math.abs(dx) > swipeThreshold) {
        if (dx < 0 && this.currentTestimonial < this.testimonials.length - 1) {
          this.goToTestimonial(this.currentTestimonial + 1);
        } else if (dx > 0 && this.currentTestimonial > 0) {
          this.goToTestimonial(this.currentTestimonial - 1);
        }
      }
      
      // Reset touch coordinates
      this.touchStartX = 0;
      this.touchEndX = 0;
    },
  },
  watch: {
    fontColorVars: {
      handler(vars) {
        for (const key in vars) {
          document.documentElement.style.setProperty(key, vars[key]);
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style scoped>
.dark {
  background: #18181b;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Focus styles for better accessibility */
button:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Smooth transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>

<style>
html, body {
  color: var(--font-base) !important;
}

a, a:visited, a[aria-label], a[role="button"] {
  color: var(--font-link) !important;
}
a:hover, a:focus, a[aria-label]:hover, a[role="button"]:hover {
  color: var(--font-hover) !important;
}
button, .button, input[type="submit"], input[type="button"] {
  color: var(--font-button) !important;
}
button:hover, .button:hover, input[type="submit"]:hover, input[type="button"]:hover {
  color: var(--font-hover) !important;
}
</style>