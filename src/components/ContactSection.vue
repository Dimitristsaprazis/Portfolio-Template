<template>
  <section id="contact" class="py-12 sm:py-16 md:py-24">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
      <h2 
        class="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 sm:mb-8"
        :style="{ color: theme?.components?.contact?.title || '#a78bfa' }"
      >
        Let's Connect!
      </h2>
      <p 
        class="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
        :style="{ color: theme?.components?.contact?.subtitle || '#d1d5db' }"
      >
        I'm always open to connecting on social media. Feel free to reach out!
      </p>
      <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
        <a
          v-for="s in social"
          :key="s.icon"
          :href="s.url"
          target="_blank"
          rel="noopener"
          class="group flex flex-col items-center transition-all duration-300 hover:scale-105"
          :aria-label="`Connect on ${s.icon}`"
        >
          <div 
            class="text-white rounded-full p-3 sm:p-4 shadow-lg mb-2 transition-all duration-300 hover:shadow-xl"
            :style="{ 
              backgroundColor: theme?.backgrounds?.social || 'rgba(99, 102, 241, 0.9)'
            }"
            style="min-width: 56px; min-height: 56px; display: flex; align-items: center; justify-content: center;"
          >
            <span v-if="s.icon === 'github'">
              <!-- GitHub SVG -->
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"/></svg>
            </span>
            <span v-else-if="s.icon === 'linkedin'">
              <!-- LinkedIn SVG -->
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </span>
            <span v-else-if="s.icon === 'email'">
              <!-- Envelope SVG -->
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" fill="none"/>
                <path d="M3 7l9 6 9-6" stroke="currentColor" fill="none"/>
              </svg>
            </span>
            <span v-else-if="s.icon === 'twitter'">
              <!-- Twitter SVG -->
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.46 5.97c-.77.34-1.6.57-2.47.67a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.57-1.35 2.15-2.2z"/>
              </svg>
            </span>
            <span v-else>
              <!-- Fallback icon -->
              <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </span>
          </div>
          <span 
            class="text-xs sm:text-sm capitalize transition-colors duration-300 font-medium"
            :style="{ color: theme?.components?.contact?.iconLabel || '#c7d2fe' }"
          >
            {{ s.icon }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    social: Array,
    theme: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
@media (max-width: 767px) {
  #contact {
    padding-top: 2rem !important;
    padding-bottom: 3rem !important;
  }
}
</style> 