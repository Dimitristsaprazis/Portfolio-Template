<template>
  <section id="contact" class="py-12 sm:py-16 md:py-24">
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
          class="group flex flex-col items-center transition-colors duration-300"
        >
          <div class="bg-indigo-500/90 group-hover:bg-indigo-400 text-white rounded-full p-4 shadow-lg mb-2 transition-colors duration-300">
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
          <span class="text-sm text-indigo-200 group-hover:text-indigo-400 capitalize transition-colors duration-300">
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
    social: Array
  }
}
</script> 