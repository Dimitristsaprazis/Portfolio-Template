<template>
  <section 
    class="py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center min-h-screen h-[100vh] relative overflow-hidden hero-section"
    aria-label="Hero section"
  >
    <!-- Mobile Layout: Image First -->
    <div 
      class="md:hidden flex-1 flex justify-center items-center mb-8 mobile-hero-img"
      :class="{ 
        'opacity-0 translate-y-10': !heroRightVisible, 
        'opacity-100 translate-y-0': heroRightVisible 
      }"
      style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
    >
      <img 
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" 
        alt="Dimitris Tsaprazis - Professional headshot" 
        class="rounded-full shadow-2xl border-4 border-gray-700 w-48 h-48 sm:w-56 sm:h-56 object-cover mobile-hero-img-el"
        loading="eager"
      >
    </div>

    <!-- Desktop Layout: Text First -->
    <div 
      class="hidden md:flex flex-1 flex-col items-start justify-center px-8 md:px-20 hero-typewriter-block"
      :class="{ 
        'opacity-0 -translate-x-20': !heroLeftVisible, 
        'opacity-100 translate-x-0': heroLeftVisible 
      }"
      style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
    >
      <div class="mb-2 w-full">
        <!-- Greeting Line -->
        <div
          class="font-light tracking-wide min-h-[2.5rem] mb-4"
          :class="{ 'opacity-100 translate-y-0': displayedGreeting, 'opacity-0 translate-y-4': !displayedGreeting }"
        >
          <span :style="greetingStyle">{{ displayedGreeting }}</span>
          <span v-if="typingStep === 0 && !typingDone" class="type-cursor" aria-hidden="true">|</span>
        </div>
        <!-- Name Line -->
        <div
          class="font-extrabold text-5xl sm:text-6xl md:text-7xl font-mono drop-shadow-lg min-h-[3.5rem] leading-tight break-words mb-4"
          :class="{ 'opacity-100 translate-y-0': displayedName, 'opacity-0 translate-y-4': !displayedName }"
          :style="nameStyle"
        >
          <span class="hero-name-text">{{ displayedName }}</span>
          <span v-if="typingStep === 1 && !typingDone" class="type-cursor" aria-hidden="true">|</span>
        </div>
        <!-- Tagline Line -->
        <div
          class="text-2xl md:text-3xl font-light tracking-wide min-h-[2.5rem] leading-tight break-words mb-2"
          :class="{ 'opacity-100 translate-y-0': displayedTagline, 'opacity-0 translate-y-4': !displayedTagline }"
        >
          <span :style="taglineStyle">{{ displayedTagline }}</span>
          <span v-if="typingStep === 2 && !typingDone" class="type-cursor" aria-hidden="true">|</span>
        </div>
      </div>
      
      <!-- Resume Download Button -->
      <div v-if="showResume && resumeUrl && resumeUrl !== '#'">
        <a 
          :href="resumeUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow focus:outline-none focus:ring-2 focus:ring-offset-2"
          :style="resumeButtonStyle()"
          aria-label="Download resume"
        >
          Download Resume
        </a>
      </div>
    </div>

    <!-- Mobile Layout: Text Second -->
    <div 
      class="md:hidden flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center"
      :class="{ 
        'opacity-0 -translate-y-10': !heroLeftVisible, 
        'opacity-100 translate-y-0': heroLeftVisible 
      }"
      style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
    >
      <div class="mb-2 w-full flex flex-col items-center hero-typewriter-mobile-block">
        <!-- Greeting Line -->
        <div
          class="font-light tracking-wide min-h-[2rem] mb-3"
          :class="{ 'opacity-100 translate-y-0': displayedGreeting, 'opacity-0 translate-y-4': !displayedGreeting }"
        >
          <span :style="greetingStyle">{{ displayedGreeting }}</span>
          <span v-if="typingStep === 0 && !typingDone" class="type-cursor" aria-hidden="true">|</span>
        </div>
        <!-- Name Line -->
        <div
          class="font-extrabold text-4xl sm:text-5xl font-mono drop-shadow-lg min-h-[2.5rem] leading-tight break-words mb-3"
          :class="{ 'opacity-100 translate-y-0': displayedName, 'opacity-0 translate-y-4': !displayedName }"
          :style="nameStyle"
        >
          <span class="hero-name-text">{{ displayedName }}</span>
          <span v-if="typingStep === 1 && !typingDone" class="type-cursor" aria-hidden="true">|</span>
        </div>
        <!-- Tagline Line -->
        <div
          class="text-lg sm:text-xl font-light tracking-wide min-h-[2rem] leading-tight break-words mb-2"
          :class="{ 'opacity-100 translate-y-0': displayedTagline, 'opacity-0 translate-y-4': !displayedTagline }"
        >
          <span :style="taglineStyle">{{ displayedTagline }}</span>
          <span v-if="typingStep === 2 && !typingDone" class="type-cursor" aria-hidden="true">|</span>
        </div>
      </div>
      
      <!-- Resume Download Button (Mobile) -->
      <div v-if="showResume && resumeUrl && resumeUrl !== '#'">
        <a 
          :href="resumeUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow focus:outline-none focus:ring-2 focus:ring-offset-2"
          :style="resumeButtonStyle()"
          aria-label="Download resume"
        >
          Download Resume
        </a>
      </div>
    </div>

    <!-- Desktop Layout: Image Second -->
    <div class="hidden md:flex flex-1 flex flex-col items-center justify-center px-8 md:px-20">
      <img 
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" 
        alt="Dimitris Tsaprazis - Professional headshot" 
        class="rounded-full shadow-2xl border-4 border-gray-700 w-60 h-60 object-cover mb-8"
        loading="eager"
      >
    </div>

    <!-- Scroll Down Animation -->
    <button 
      @click="$emit('scroll-to-about')" 
      class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center select-none focus:outline-none group z-10 mt-8 w-full mobile-scroll-indicator"
      aria-label="Scroll to about section"
    >
      <span 
        class="text-xs sm:text-sm mb-2 animate-bounce"
        :style="{ color: theme?.components?.hero?.scrollText || '#d1d5db' }"
      >
        Scroll Down
      </span>
      <div class="flex flex-col items-center w-full">
        <div 
          class="w-6 h-8 sm:w-8 sm:h-10 rounded-full border flex items-start justify-center relative mx-auto"
          :style="{ borderColor: theme?.components?.hero?.scrollBorder || '#9ca3af' }"
        >
          <div 
            class="w-1 h-2 sm:h-3 rounded-full mt-2 animate-scroll-arrow mx-auto"
            :style="{ backgroundColor: theme?.components?.hero?.scrollArrow || '#818cf8' }"
          ></div>
        </div>
        <svg 
          class="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-2 animate-bounce-slow mx-auto" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          viewBox="0 0 24 24"
          :style="{ color: theme?.components?.hero?.scrollArrow || '#818cf8' }"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  </section>
</template>

<script>
import config from '../config.js';
function colorClassOrStyle(color, type = 'color') {
  if (!color) return { class: '', style: {} };
  if (typeof color === 'string' && (color.startsWith('text-') || color.startsWith('bg-') || color.startsWith('hover:'))) {
    return { class: color, style: {} };
  }
  if (type === 'color') {
    return { class: '', style: { color } };
  } else if (type === 'background') {
    return { class: '', style: { background: color } };
  }
  return { class: '', style: {} };
}
export default {
  name: 'HeroSection',
  props: {
    displayedGreeting: {
      type: String,
      default: ''
    },
    displayedName: {
      type: String,
      default: ''
    },
    displayedTagline: {
      type: String,
      default: ''
    },
    typingStep: {
      type: Number,
      default: 0
    },
    typingDone: {
      type: Boolean,
      default: false
    },
    heroLeftVisible: {
      type: Boolean,
      default: false
    },
    heroRightVisible: {
      type: Boolean,
      default: false
    },
    resumeUrl: {
      type: String,
      default: '#'
    },
    showResume: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['scroll-to-about'],
  computed: {
    greetingStyle() {
      const color = this.theme?.components?.hero?.greeting || '#d1d5db';
      return {
        color: color + ' !important',
        transition: 'opacity 0.5s, transform 0.5s;'
      };
    },
    taglineStyle() {
      const color = this.theme?.components?.hero?.tagline || '#d1d5db';
      return {
        color: color + ' !important',
        transition: 'opacity 0.5s 0.4s, transform 0.5s 0.4s;'
      };
    },
    nameStyle() {
      const color = this.theme?.components?.hero?.name || '#ffffff';
      console.log('Hero name color:', color);
      return {
        '--hero-name-color': color,
        color: 'var(--hero-name-color) !important',
        transition: 'opacity 0.5s 0.2s, transform 0.5s 0.2s;'
      };
    }
  },
  mounted() {
    let wheelTriggered = false;
    this._onWheel = (e) => {
      if (!wheelTriggered && window.scrollY <= 10 && e.deltaY > 0) {
        wheelTriggered = true;
        e.preventDefault();
        this.$emit('scroll-to-about');
        setTimeout(() => { wheelTriggered = false; }, 800);
      }
    };
    window.addEventListener('wheel', this._onWheel, { passive: false });
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this._onWheel);
  },
  methods: {
    resumeButtonStyle() {
      return {
        backgroundColor: this.theme?.backgrounds?.primary || '#6366f1',
        color: this.theme?.fontColors?.button || '#ffffff',
        transition: 'all 0.3s ease'
      };
    }
  }
};
</script>

<style>
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
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0; 
  }
}

@keyframes scroll-arrow {
  0% { 
    opacity: 0; 
    transform: translateY(0); 
  }
  50% { 
    opacity: 1; 
  }
  100% { 
    opacity: 0; 
    transform: translateY(8px); 
  }
}

.animate-scroll-arrow {
  animation: scroll-arrow 1.5s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(4px); 
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}

/* Focus styles for better accessibility */
button:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Use CSS variables for hover states */
a[aria-label="Download resume"]:hover {
  color: var(--font-hover) !important;
}

.hero-name-text {
  color: var(--hero-name-color, #ff0000) !important;
}

@media (max-width: 640px) {
  .hero-typewriter-block .mb-2,
  .hero-typewriter-mobile-block.mb-2 {
    margin-bottom: 4.5rem !important;
  }
}

@media (max-width: 767px) {
  .hero-section {
    padding-top: 2rem !important;
  }
}
</style> 