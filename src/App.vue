<template>
  <div class="min-h-screen text-gray-900 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 transition-colors duration-500">
    <!-- ================= HERO SECTION (Typing animation preserved) ================= -->
    <section class="py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center min-h-screen h-[100vh] relative overflow-hidden hero-section">
      <!-- Mobile Layout: Image First -->
      <div class="md:hidden flex-1 flex justify-center items-center mb-8 mobile-hero-img"
           :class="{ 'opacity-0 translate-y-10': !heroRightVisible, 'opacity-100 translate-y-0': heroRightVisible }"
           style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
      >
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" alt="Profile" class="rounded-full shadow-2xl border-4 border-gray-700 w-48 h-48 sm:w-56 sm:h-56 object-cover mobile-hero-img-el">
      </div>
      <!-- Desktop Layout: Text First -->
      <div class="hidden md:flex flex-1 flex flex-col items-start justify-center px-8 md:px-20"
           :class="{ 'opacity-0 -translate-x-20': !heroLeftVisible, 'opacity-100 translate-x-0': heroLeftVisible }"
           style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
      >
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 flex items-baseline">
          <span class="mr-2">Hi, I'm</span>
          <span class="text-indigo-400 font-mono whitespace-nowrap">{{ displayedName }}</span>
          <span v-if="!typingDone" class="type-cursor ml-1">|</span>
          <span v-else class="type-cursor-static ml-1">|</span>
        </h1>
        <p class="text-2xl md:text-3xl mb-10 font-light text-gray-300">{{ tagline }}</p>
        <div v-if="showResume && resumeUrl && resumeUrl !== '#'">
          <a :href="resumeUrl" target="_blank" class="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow hover:shadow-indigo-500/25">Download Resume</a>
        </div>
      </div>
      <!-- Mobile Layout: Text Second -->
      <div class="md:hidden flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center"
           :class="{ 'opacity-0 -translate-y-10': !heroLeftVisible, 'opacity-100 translate-y-0': heroLeftVisible }"
           style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
      >
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-4 flex flex-col items-center">
          <span class="mb-2">Hi, I'm</span>
          <span class="inline-flex items-baseline font-extrabold">
            <span class="text-indigo-400 font-mono whitespace-nowrap">{{ displayedName }}</span>
            <span v-if="!typingDone" class="type-cursor ml-1">|</span>
            <span v-else class="type-cursor-static ml-1">|</span>
          </span>
        </h1>
        <p class="text-lg sm:text-xl font-light text-gray-300">{{ tagline }}</p>
        <div v-if="showResume && resumeUrl && resumeUrl !== '#'">
          <a :href="resumeUrl" target="_blank" class="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow hover:shadow-indigo-500/25">Download Resume</a>
        </div>
      </div>
      <!-- Desktop Layout: Image Second -->
      <div class="hidden md:flex flex-1 flex justify-center items-center"
           :class="{ 'opacity-0 translate-x-20': !heroRightVisible, 'opacity-100 translate-x-0': heroRightVisible }"
           style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
      >
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" alt="Profile" class="rounded-full shadow-2xl border-4 border-gray-700 w-60 h-60 object-cover">
      </div>
      <!-- Scroll Down Animation (restored) -->
      <button @click="scrollToAbout" class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center select-none focus:outline-none group z-10 mt-8 w-full mobile-scroll-indicator">
        <span class="text-gray-300 text-xs sm:text-sm mb-2 animate-bounce">Scroll Down</span>
        <div class="flex flex-col items-center w-full">
          <div class="w-6 h-8 sm:w-8 sm:h-10 rounded-full border border-gray-400 flex items-start justify-center relative mx-auto">
            <div class="w-1 h-2 sm:h-3 bg-indigo-400 rounded-full mt-2 animate-scroll-arrow mx-auto"></div>
          </div>
          <svg class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mt-1 sm:mt-2 animate-bounce-slow mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </section>

    <!-- ================= ABOUT ME & SKILLS SECTION ================= -->
    <section id="about" class="w-full min-h-screen h-[100vh] py-24 md:py-32 flex flex-col md:flex-row items-center justify-center relative about-section scroll-mt-custom">
      <div class="flex flex-col md:flex-row w-full max-w-5xl items-stretch justify-center gap-0 md:gap-0">
        <!-- Left: About -->
        <div class="flex-1 flex flex-col justify-center items-center md:items-end pr-0 md:pr-12 text-center md:text-right">
          <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-6 md:mb-8 leading-tight">About Me</h2>
          <p class="text-lg md:text-xl text-gray-200 max-w-md mb-4 md:mb-6">{{ about.bio }}</p>
          <div class="text-base text-gray-400 italic">"{{ about.quote }}"</div>
        </div>
        <!-- Accent Line -->
        <div class="hidden md:flex flex-shrink-0 w-0.5 bg-gradient-to-b from-indigo-400/80 to-indigo-400/10 mx-8 rounded-full"></div>
        <!-- Right: Skills -->
        <div class="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-12">
          <h3 class="text-2xl font-bold text-indigo-300 mb-8 md:mb-10">Skills</h3>
          <div class="flex flex-wrap gap-x-6 gap-y-4 w-full justify-center md:justify-start skills-list">
            <span v-for="(skill, i) in skills" :key="skill" class="skill-badge">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= EXPERIENCE SECTION (optional) ================= -->
    <section v-if="showExperience" id="experience" class="py-20 md:py-28">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-10 text-center text-indigo-400">Experience</h2>
        <div class="relative pl-8 md:pl-16">
          <!-- Vertical timeline line -->
          <div class="absolute left-2 md:left-6 top-0 bottom-0 w-1 bg-indigo-400/30 rounded-full"></div>
          <div class="space-y-8">
            <div
              v-for="(item, idx) in experience"
              :key="item.title + item.year"
              class="relative flex flex-col md:flex-row md:items-center gap-4 bg-gray-800/60 rounded-xl p-6 shadow"
            >
              <!-- Timeline bullet -->
              <div class="timeline-bullet absolute z-10">
                <span class="block w-5 h-5 bg-indigo-400 border-4 border-white dark:border-gray-900 rounded-full shadow"></span>
              </div>
              <div class="text-indigo-300 font-bold text-lg md:w-32">{{ item.year }}</div>
              <div class="flex-1">
                <div class="text-xl font-semibold text-gray-100">{{ item.title }}</div>
                <div class="text-gray-400 mb-1">{{ item.place }}</div>
                <div class="text-gray-300">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= TESTIMONIALS SECTION (optional) ================= -->
    <section v-if="showTestimonials" id="testimonials" class="py-20 md:py-28">
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-10 text-center text-indigo-400">Testimonials</h2>
        <div class="relative flex items-center justify-center">
          <!-- Navigation Buttons -->
          <button
            @click="goToTestimonial(currentTestimonial - 1)"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-400/80 hover:bg-indigo-500 text-white rounded-full p-2 shadow transition disabled:opacity-30"
            :disabled="currentTestimonial === 0"
            style="display: flex;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <transition name="testimonial-fade" mode="out-in">
            <div
              :key="currentTestimonial"
              ref="testimonialSlide"
              class="bg-gray-800/60 rounded-2xl p-6 shadow text-gray-200 min-w-[80vw] max-w-[80vw] md:min-w-[480px] md:max-w-[480px] flex-shrink-0 transition-all duration-300"
              style="touch-action: pan-y;"
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
            >
              <div class="mb-2 text-lg italic flex items-start gap-2">
                <svg class="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m2 0a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v6z" />
                </svg>
                "{{ testimonials[currentTestimonial].quote }}"
              </div>
              <div class="text-indigo-300 font-bold text-right">- {{ testimonials[currentTestimonial].author }}</div>
            </div>
          </transition>
          <button
            @click="goToTestimonial(currentTestimonial + 1)"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-400/80 hover:bg-indigo-500 text-white rounded-full p-2 shadow transition disabled:opacity-30"
            :disabled="currentTestimonial === testimonials.length - 1"
            style="display: flex;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ================= SOCIAL/CONTACT LINKS SECTION ================= -->
    <section id="contact" class="py-12 md:py-20">
      <div class="max-w-2xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-indigo-400">Let's Connect!</h2>
        <p class="text-lg text-gray-300 mb-8">I'm always open to connecting on social media. Feel free to reach out!</p>
        <div class="flex flex-wrap justify-center gap-6 mb-4">
          <a
            v-for="s in social"
            :key="s.icon"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
          >
            <div class="bg-indigo-500/90 group-hover:bg-indigo-400 text-white rounded-full p-4 shadow-lg mb-2 transition-colors duration-200">
              <span v-if="s.icon === 'github'">
                <!-- GitHub SVG -->
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"/></svg>
              </span>
              <span v-else-if="s.icon === 'linkedin'">
                <!-- LinkedIn SVG -->
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </span>
              <span v-else-if="s.icon === 'email'">
                <!-- Envelope SVG -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" fill="none"/>
                  <path d="M3 7l9 6 9-6" stroke="currentColor" fill="none"/>
                </svg>
              </span>
              <span v-else>
                <!-- Fallback icon -->
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
              </span>
            </div>
            <span class="text-sm text-indigo-200 group-hover:text-indigo-400 capitalize">
              <template v-if="s.icon === 'email'">
                {{ s.url.replace('mailto:', '') }}
              </template>
              <template v-else>
                {{ s.icon }}
              </template>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ================= THEME TOGGLE (optional) ================= -->
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

// === CONFIGURATION: Edit these values to customize your template ===
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
// === END CONFIGURATION ===

export default {
  components: {
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
.type-cursor {
  color: #fff;
  font-weight: bold;
  animation: blink-caret 0.75s step-end infinite;
}
.type-cursor-static {
  color: #fff;
  font-weight: bold;
  opacity: 1;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
html {
  scroll-behavior: smooth;
}
@keyframes scroll-arrow {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(8px); }
}
.animate-scroll-arrow {
  animation: scroll-arrow 1.5s ease-in-out infinite;
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}

/* Mobile-specific improvements */
@media (max-width: 640px) {
  /* Improve touch targets */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Better mobile scrolling */
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Optimize text for mobile reading */
  p {
    line-height: 1.6;
  }
  
  /* Improve mobile form inputs */
  input, textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  /* Better mobile spacing */
  .space-y-4 > * + * {
    margin-top: 1rem;
  }
  
  .space-y-6 > * + * {
    margin-top: 1.5rem;
  }
  
  /* Optimize mobile animations */
  .hover\:scale-105:hover {
    transform: scale(1.02);
  }
  
  /* Better mobile grid layouts */
  .grid {
    gap: 1rem;
  }
  
  /* Improve mobile button spacing */
  .gap-2 {
    gap: 0.5rem;
  }
  
  .gap-3 {
    gap: 0.75rem;
  }
  
  /* Better mobile image handling */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Optimize mobile typography */
  h1 {
    line-height: 1.1;
  }
  
  h2 {
    line-height: 1.2;
  }
  
  h3 {
    line-height: 1.3;
  }
  
  /* Better mobile padding */
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  /* Improve mobile margins */
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  /* Better mobile flex layouts */
  .flex {
    flex-direction: column;
  }
  
  .lg\:flex-row {
    flex-direction: row;
  }
  
  /* Optimize mobile shadows */
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  /* Better mobile borders */
  .border {
    border-width: 1px;
  }
  
  /* Improve mobile rounded corners */
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .rounded-xl {
    border-radius: 0.75rem;
  }
  
  .rounded-2xl {
    border-radius: 1rem;
  }
  
  /* === Custom mobile hero improvements === */
  .hero-section {
    padding-bottom: 5.5rem !important; /* Ensure scroll indicator is always visible */
  }
  .mobile-hero-img {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }
  .mobile-hero-img-el {
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    position: relative;
  }
  .mobile-scroll-indicator {
    bottom: 1.5rem !important; /* Raise scroll indicator a bit for visibility */
  }
  .about-section {
    margin-top: 3.5rem !important;
    padding-top: 5.5rem !important;
  }
  .skills-list {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 0.75rem 0.5rem !important;
  }
  .skill-badge {
    display: inline-flex !important;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    color: #6366f1;
    background: linear-gradient(90deg, #fff 60%, #e0e7ff 100%);
    border: 1.5px solid #6366f1;
    border-radius: 9999px;
    box-shadow: 0 2px 8px 0 rgba(99,102,241,0.10);
    padding: 0.5rem 1.1rem;
    margin: 0.15rem 0.4rem;
    transition: box-shadow 0.2s, transform 0.2s;
    min-width: unset !important;
    width: auto !important;
    box-sizing: border-box;
  }
  .scroll-mt-custom {
    scroll-margin-top: 80px;
  }
}

/* Tablet optimizations */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Better tablet spacing */
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  /* Optimize tablet typography */
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  /* Better tablet grid layouts */
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  /* Improve tablet button sizes */
  button, a {
    min-height: 48px;
    min-width: 48px;
  }
}

/* High DPI display optimizations */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Sharper images and icons */
  img, svg {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-bounce,
  .animate-bounce-slow,
  .animate-scroll-arrow {
    animation: none;
  }
}

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  .dark {
    background: #0f0f23;
  }
}

/* Landscape mobile optimizations */
@media (max-width: 640px) and (orientation: landscape) {
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .min-h-screen {
    min-height: 100vh;
  }
  
  /* Better landscape layout */
  .flex-col {
    flex-direction: row;
  }
  
  /* Optimize landscape text */
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}

.masonry-grid {
  width: 100%;
}
.break-inside-avoid {
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
}
.custom-card {
  background: rgba(30, 41, 59, 0.7);
  box-shadow: 0 8px 32px 0 rgba(99,102,241,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10);
  border-radius: 1.5rem;
  border: 1.5px solid rgba(129, 140, 248, 0.18);
  backdrop-filter: blur(16px);
  transition: box-shadow 0.3s, transform 0.3s, border 0.3s;
}
.custom-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 16px 40px 0 rgba(99,102,241,0.18), 0 2px 12px 0 rgba(0,0,0,0.14);
  border-color: #818cf8;
}
.slide-fade-enter-active {
  transition: opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1);
}
.slide-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1);
}
.slide-left.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-60px) scale(0.97);
}
.slide-left.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.slide-right.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(60px) scale(0.97);
}
.slide-right.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.animated-light-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  background: radial-gradient(circle at 20% 30%, rgba(99,102,241,0.10) 0, rgba(99,102,241,0.04) 40%, transparent 80%),
              radial-gradient(circle at 80% 70%, rgba(139,92,246,0.10) 0, rgba(139,92,246,0.04) 40%, transparent 80%);
  animation: move-light 8s ease-in-out infinite alternate;
  z-index: 1;
}
@keyframes move-light {
  0% {
    background-position: 20% 30%, 80% 70%;
  }
  100% {
    background-position: 40% 60%, 60% 40%;
  }
}

/* Modern skill badge style */
.skill-badge {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #6366f1;
  background: linear-gradient(90deg, #fff 60%, #e0e7ff 100%);
  border: 1.5px solid #6366f1;
  border-radius: 9999px;
  box-shadow: 0 2px 8px 0 rgba(99,102,241,0.10);
  padding: 0.5rem 1.1rem;
  margin: 0.15rem 0.2rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.skill-badge:hover {
  box-shadow: 0 4px 16px 0 rgba(99,102,241,0.18);
  transform: translateY(-2px) scale(1.04);
  background: linear-gradient(90deg, #e0e7ff 60%, #6366f1 100%);
  color: #fff;
  border-color: #6366f1;
}

/* Timeline bullets for experience */
.timeline-bullet {
  left: -1.5rem;
  top: 2rem;
  transform: none;
}
@media (min-width: 768px) {
  .timeline-bullet {
    left: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
}

/* Timeline bullets for testimonials */
#testimonials .timeline-bullet {
  top: 2rem;
}
@media (min-width: 768px) {
  #testimonials .timeline-bullet {
    top: 2.5rem;
  }
}

/* Hide scrollbar for horizontal scroll */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}
.snap-x {
  scroll-snap-type: x mandatory;
}
.snap-center {
  scroll-snap-align: center;
}
.testimonial-fade-enter-active, .testimonial-fade-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.testimonial-fade-enter-from, .testimonial-fade-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.testimonial-fade-leave-from, .testimonial-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
[class^='icon-'], [class*=' icon-'] {
  font-size: 2rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
