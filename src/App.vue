<template>
  <div class="min-h-screen text-gray-900 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 transition-colors duration-500">
    <HeroSection
      :displayedName="displayedName"
      :typingDone="typingDone"
      :heroLeftVisible="heroLeftVisible"
      :heroRightVisible="heroRightVisible"
      :resumeUrl="resumeUrl"
      :tagline="tagline"
      :showResume="showResume"
      @scrollToAbout="scrollToAbout"
    />
    <AboutSection :about="about" :skills="skills" />
    <ExperienceSection :experience="experience" :showExperience="showExperience" />
    <TestimonialsSection
      :testimonials="testimonials"
      :showTestimonials="showTestimonials"
      :currentTestimonial="currentTestimonial"
      @goToTestimonial="goToTestimonial"
      @onTouchStart="onTouchStart"
      @onTouchMove="onTouchMove"
      @onTouchEnd="onTouchEnd"
    />
    <ContactSection :social="social" />
    <button v-if="showThemeToggle" @click="toggleTheme" class="fixed bottom-6 right-6 z-50 bg-gray-200/80 dark:bg-gray-800/80 text-indigo-500 dark:text-indigo-300 p-3 rounded-full shadow-lg hover:bg-indigo-100 dark:hover:bg-indigo-500 hover:text-indigo-700 dark:hover:text-white transition-colors duration-300">
      <svg v-if="!isDark" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
    </button>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMotion } from '@vueuse/motion';
import { AcademicCapIcon, UsersIcon, LightBulbIcon, ArrowPathIcon, ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/vue/24/outline';
import { NCard, NButton, NTag, NGrid, NGridItem } from 'naive-ui';
import config from './config.js';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';

export default {
  components: {
    HeroSection,
    AboutSection,
    ExperienceSection,
    TestimonialsSection,
    ContactSection,
    AcademicCapIcon,
    UsersIcon,
    LightBulbIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    NCard, NButton, NTag, NGrid, NGridItem
  },
  data() {
    return {
      ...config,
      displayedName: '',
      nameIndex: 0,
      typingDone: false,
      heroLeftVisible: false,
      heroRightVisible: false,
      windowWidth: window.innerWidth,
      isDark: true,
      currentTestimonial: 0,
      touchStartX: 0,
      touchEndX: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      this.heroLeftVisible = true;
      this.heroRightVisible = true;
      setTimeout(this.typeWriter, 900); // Start typing after hero slides in
    }, 200);
    AOS.init({
      duration: 900,
      once: true
    });
    window.addEventListener('resize', this.handleResize);
    // Set initial theme
    document.documentElement.classList.toggle('dark', this.isDark);
    this.$nextTick(() => this.goToTestimonial(0));
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  updated() {
    AOS.refresh();
  },
  methods: {
    typeWriter() {
      if (this.nameIndex < this.name.length) {
        this.displayedName += this.name.charAt(this.nameIndex);
        this.nameIndex++;
        setTimeout(this.typeWriter, 60);
      } else {
        this.typingDone = true;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    },
    goToTestimonial(idx) {
      if (idx < 0 || idx >= this.testimonials.length) return;
      this.currentTestimonial = idx;
    },
    onTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },
    onTouchMove(e) {
      this.touchEndX = e.changedTouches[0].screenX;
    },
    onTouchEnd() {
      const dx = this.touchEndX - this.touchStartX;
      if (Math.abs(dx) > 50) { // swipe threshold
        if (dx < 0 && this.currentTestimonial < this.testimonials.length - 1) {
          this.goToTestimonial(this.currentTestimonial + 1);
        } else if (dx > 0 && this.currentTestimonial > 0) {
          this.goToTestimonial(this.currentTestimonial - 1);
        }
      }
      this.touchStartX = 0;
      this.touchEndX = 0;
    },
  }
}
</script>

<style scoped>
.dark {
  background: #18181b;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
