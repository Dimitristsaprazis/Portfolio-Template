<template>
  <section class="py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center min-h-screen h-[100vh] relative overflow-hidden hero-section">
    <!-- Mobile Layout: Image First -->
    <div class="md:hidden flex-1 flex justify-center items-center mb-8 mobile-hero-img"
         :class="{ 'opacity-0 translate-y-10': !heroRightVisible, 'opacity-100 translate-y-0': heroRightVisible }"
         style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
    >
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" alt="Profile" class="rounded-full shadow-2xl border-4 border-gray-700 w-48 h-48 sm:w-56 sm:h-56 object-cover mobile-hero-img-el">
    </div>
    <!-- Desktop Layout: Text First -->
    <div class="hidden md:flex flex-1 flex-col items-start justify-center px-8 md:px-20"
         :class="{ 'opacity-0 -translate-x-20': !heroLeftVisible, 'opacity-100 translate-x-0': heroLeftVisible }"
         style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
    >
      <div class="mb-2 text-2xl font-light text-gray-300 tracking-wide">Hi, I'm</div>
      <h1 class="mb-2 font-extrabold text-5xl md:text-6xl text-indigo-400 font-mono whitespace-nowrap flex items-center gap-2 drop-shadow-lg">
        {{ displayedName }}
        <span v-if="!typingDone" class="type-cursor ml-1">|</span>
        <span v-else class="type-cursor-static ml-1">|</span>
      </h1>
      <div class="text-2xl md:text-3xl font-light text-gray-300 mb-6 tracking-wide">{{ tagline }}</div>
      <div v-if="showResume && resumeUrl && resumeUrl !== '#'">
        <a :href="resumeUrl" target="_blank" class="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow hover:shadow-indigo-500/25">Download Resume</a>
      </div>
    </div>
    <!-- Mobile Layout: Text Second -->
    <div class="md:hidden flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center"
         :class="{ 'opacity-0 -translate-y-10': !heroLeftVisible, 'opacity-100 translate-y-0': heroLeftVisible }"
         style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
    >
      <div class="mb-2 text-xl font-light text-gray-300 tracking-wide">Hi, I'm</div>
      <h1 class="mb-2 font-extrabold text-3xl sm:text-4xl text-indigo-400 font-mono whitespace-nowrap flex flex-col items-center drop-shadow-lg">
        {{ displayedName }}
        <span v-if="!typingDone" class="type-cursor ml-1">|</span>
        <span v-else class="type-cursor-static ml-1">|</span>
      </h1>
      <div class="text-lg sm:text-xl font-light text-gray-300 mb-6 tracking-wide">{{ tagline }}</div>
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
    <button @click="$emit('scrollToAbout')" class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center select-none focus:outline-none group z-10 mt-8 w-full mobile-scroll-indicator">
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
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    displayedName: String,
    typingDone: Boolean,
    heroLeftVisible: Boolean,
    heroRightVisible: Boolean,
    resumeUrl: String,
    tagline: String,
    showResume: Boolean
  }
}
</script>

<style scoped>
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
</style> 