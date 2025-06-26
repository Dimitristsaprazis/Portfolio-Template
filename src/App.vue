<template>
  <div class="dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100">
    <!-- Hero Section -->
    <section class="py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center min-h-screen h-[100vh] relative overflow-hidden">
      <!-- Mobile Layout: Image First -->
      <div class="md:hidden flex-1 flex justify-center items-center mb-8"
           :class="{ 'opacity-0 translate-y-10': !heroRightVisible, 'opacity-100 translate-y-0': heroRightVisible }"
           style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
      >
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" alt="Profile" class="rounded-full shadow-2xl border-4 border-gray-700 w-48 h-48 sm:w-56 sm:h-56 object-cover">
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
        <p class="text-2xl md:text-3xl mb-10 font-light text-gray-300">Put your job title here</p>
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
        <p class="text-lg sm:text-xl font-light text-gray-300">Put your job title here</p>
      </div>

      <!-- Desktop Layout: Image Second -->
      <div class="hidden md:flex flex-1 flex justify-center items-center"
           :class="{ 'opacity-0 translate-x-20': !heroRightVisible, 'opacity-100 translate-x-0': heroRightVisible }"
           style="transition: all 0.8s cubic-bezier(.77,0,.18,1);"
      >
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" alt="Profile" class="rounded-full shadow-2xl border-4 border-gray-700 w-60 h-60 object-cover">
      </div>

      <!-- Scroll Down Animation -->
      <button @click="scrollToAbout" class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center select-none focus:outline-none group z-10 mt-8 w-full">
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

    <!-- About + Strengths Section (Minimalist Split) -->
    <section id="about" class="w-full min-h-screen h-[100vh] py-24 md:py-32 flex flex-col md:flex-row items-center justify-center relative">
      <div class="flex flex-col md:flex-row w-full max-w-5xl items-stretch justify-center gap-0 md:gap-0">
        <!-- Left: About -->
        <div class="flex-1 flex flex-col justify-center items-center md:items-end pr-0 md:pr-12 text-center md:text-right">
          <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-6 md:mb-8 leading-tight">About Me</h2>
          <p class="text-lg md:text-xl text-gray-200 max-w-md mb-4 md:mb-6">Write your short bio here. Share your passions, what drives you, and what makes you unique. Mention your values, your approach to work, or anything you want people to know about you.</p>
          <div class="text-base text-gray-400 italic">"Put your favorite quote or motto here."</div>
        </div>
        <!-- Accent Line -->
        <div class="hidden md:flex flex-shrink-0 w-0.5 bg-gradient-to-b from-indigo-400/80 to-indigo-400/10 mx-8 rounded-full"></div>
        <!-- Right: Strengths as Word Cloud -->
        <div class="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-12">
          <h3 class="text-2xl font-bold text-indigo-300 mb-8 md:mb-10">My Top Strengths</h3>
          <div class="flex flex-wrap gap-x-6 gap-y-4 w-full justify-center md:justify-start">
            <span v-for="(strength, i) in strengths" :key="strength.label"
              v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 200 + i * 80 } } }"
              :class="[
                'inline-flex items-center',
                i % 3 === 0 ? 'text-2xl font-extrabold text-indigo-400' : '',
                i % 3 === 1 ? 'text-lg font-semibold text-indigo-200' : '',
                i % 3 === 2 ? 'text-xl font-bold text-indigo-300' : ''
              ]"
            >
              <component :is="strength.icon" class="w-6 h-6 mr-2 text-indigo-400" />
              {{ strength.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section as Waterfall/Masonry Grid -->
    <section id="projects" class="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-12 text-center text-indigo-400">Featured Projects</h2>
        <div
          class="masonry-grid"
          :style="{
            columnCount: windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1,
            columnGap: '1.5rem'
          }"
        >
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.title + index"
            class="break-inside-avoid mb-8 w-full"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <div class="flex flex-col items-center bg-gray-800/40 rounded-2xl shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300 p-0 pb-6">
              <img :src="project.image" :alt="project.title" class="rounded-2xl w-full object-cover mb-4" style="max-height: 260px; min-height: 160px;" />
              <div class="px-4 w-full">
                <h3 class="text-2xl font-bold text-indigo-300 mb-2 text-center">{{ project.title || 'Project Title' }}</h3>
                <p class="text-base text-gray-200 mb-2 text-center">{{ project.description || 'Describe your project here.' }}</p>
                <div v-if="project.technologies && project.technologies.length" class="flex flex-wrap gap-2 mb-2 justify-center">
                  <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-gray-700/30 text-gray-300 text-xs font-medium rounded-full border border-gray-600">{{ tech }}</span>
                </div>
                <div class="flex gap-4 mt-2 justify-center">
                  <a :href="project.demoLink || project.link" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    View
                  </a>
                  <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 7.07c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Call to Action -->
        <div class="text-center mt-16">
          <div class="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 sm:px-8 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl hover:border-indigo-400 transition-colors duration-300">
            <span class="text-sm sm:text-base text-gray-300">Want to see more?</span>
            <a href="#" class="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 text-sm sm:text-base">
              Link to your portfolio or social media →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section (Generic) -->
    <section class="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-indigo-400">Contact Me</h2>
          <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Want to get in touch? Fill out the form below or connect with me on social media. I'm always open to new opportunities, collaborations, or just a friendly chat!
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <!-- Contact Information -->
          <div class="space-y-6 sm:space-y-8" data-aos="fade-right">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 sm:mb-6">Get In Touch</h3>
              <p class="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Write a short message about how you prefer to be contacted, your location, or your response time. You can also add a friendly invitation to connect!
              </p>
            </div>
            <!-- Contact Methods -->
            <div class="space-y-4 sm:space-y-6">
              <div class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-400 transition-colors duration-300">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-semibold text-gray-100">Email</h4>
                  <a href="mailto:your@email.com" class="text-sm sm:text-base text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                    your@email.com
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-400 transition-colors duration-300">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-semibold text-gray-100">Location</h4>
                  <p class="text-sm sm:text-base text-gray-300">Put your city, country, or region here</p>
                </div>
              </div>
              <div class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-400 transition-colors duration-300">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-semibold text-gray-100">Response Time</h4>
                  <p class="text-sm sm:text-base text-gray-300">Put your typical response time here</p>
                </div>
              </div>
            </div>
            <!-- Social Links -->
            <div class="pt-4 sm:pt-6">
              <h4 class="text-base sm:text-lg font-semibold text-gray-100 mb-3 sm:mb-4">Connect with Me</h4>
              <div class="flex gap-3 sm:gap-4">
                <a href="#" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 7.07c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="#" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v10.4c0 3.3-1.9 4.8-4.6 4.8-2.5 0-4-1.3-4.7-2.8l2.8-1.6zm-10.2.3c.5.9 1 1.6 2.1 1.6 1 0 1.6-.4 1.6-2V23.7h3.2v10.4c0 3.3-1.9 4.8-4.6 4.8-2.5 0-4-1.3-4.7-2.8l2.8-1.6z" fill="#fff"/></svg>
                </a>
                <a href="#" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-1.23 0-1.23.653-1.23 1.23 0 1.23.653 1.23 1.23 0 1.23 1.23z" fill="#fff"/></svg>
                </a>
              </div>
            </div>
          </div>
          <!-- Contact Form -->
          <div class="relative" data-aos="fade-left">
            <div class="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 class="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 sm:mb-6">Send Me a Message</h3>
              <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div class="relative">
                    <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Name</label>
                    <input 
                      v-model="formData.name"
                      type="text" 
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 text-sm sm:text-base" 
                      placeholder="Your name"
                      required
                    >
                  </div>
                  <div class="relative">
                    <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Email</label>
                    <input 
                      v-model="formData.email"
                      type="email" 
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 text-sm sm:text-base" 
                      placeholder="your@email.com"
                      required
                    >
                  </div>
                </div>
                <div class="relative">
                  <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Subject</label>
                  <input 
                    v-model="formData.subject"
                    type="text" 
                    class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 text-sm sm:text-base" 
                    placeholder="What's this about?"
                    required
                  >
                </div>
                <div class="relative">
                  <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Message</label>
                  <textarea 
                    v-model="formData.message"
                    rows="4" 
                    class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 resize-none text-sm sm:text-base" 
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="group w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else class="flex items-center gap-2">
                    <svg class="animate-spin h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
              </form>
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500/20 rounded-full"></div>
            <div class="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-5 h-5 sm:w-6 sm:h-6 bg-purple-500/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMotion } from '@vueuse/motion';
import { AcademicCapIcon, UsersIcon, LightBulbIcon, ArrowPathIcon, ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/vue/24/outline';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    AcademicCapIcon,
    UsersIcon,
    LightBulbIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      name: 'Put your name here',
      displayedName: '',
      nameIndex: 0,
      typingDone: false,
      heroLeftVisible: false,
      heroRightVisible: false,
      projects: [
        {
          title: 'Project Title',
          description: 'Describe your project here. What was your role? What did you accomplish? What makes this project special?',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          link: '#',
          demoLink: '#',
          githubLink: '#',
          status: 'Live',
          category: 'Category',
          technologies: ['Skill 1', 'Skill 2', 'Skill 3']
        },
        {
          title: 'Project Title',
          description: 'Describe your project here. What was your role? What did you accomplish? What makes this project special?',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          link: '#',
          demoLink: '#',
          githubLink: '#',
          status: 'Live',
          category: 'Category',
          technologies: ['Skill 1', 'Skill 2', 'Skill 3']
        },
        {
          title: 'Project Title',
          description: 'Describe your project here. What was your role? What did you accomplish? What makes this project special?',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          link: '#',
          demoLink: '#',
          githubLink: '#',
          status: 'Live',
          category: 'Category',
          technologies: ['Skill 1', 'Skill 2', 'Skill 3']
        },
        {
          title: 'Project Title',
          description: 'Describe your project here. What was your role? What did you accomplish? What makes this project special?',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          link: '#',
          demoLink: '#',
          githubLink: '#',
          status: 'Live',
          category: 'Category',
          technologies: ['Skill 1', 'Skill 2', 'Skill 3']
        },
        {
          title: 'Project Title',
          description: 'Describe your project here. What was your role? What did you accomplish? What makes this project special?',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          link: '#',
          demoLink: '#',
          githubLink: '#',
          status: 'Live',
          category: 'Category',
          technologies: ['Skill 1', 'Skill 2', 'Skill 3']
        },
        {
          title: 'Project Title',
          description: 'Describe your project here. What was your role? What did you accomplish? What makes this project special?',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          link: '#',
          demoLink: '#',
          githubLink: '#',
          status: 'Live',
          category: 'Category',
          technologies: ['Skill 1', 'Skill 2', 'Skill 3']
        }
      ],
      projectCategories: ['All', 'Category 1', 'Category 2', 'Category 3'],
      selectedCategory: 'All',
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      strengths: [
        { label: 'Creativity', icon: 'LightBulbIcon' },
        { label: 'Teamwork', icon: 'UsersIcon' },
        { label: 'Problem Solving', icon: 'AcademicCapIcon' },
        { label: 'Adaptability', icon: 'ArrowPathIcon' },
        { label: 'Communication', icon: 'ChatBubbleLeftRightIcon' },
        { label: 'Leadership', icon: 'StarIcon' }
      ],
      windowWidth: window.innerWidth
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.selectedCategory);
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
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleSubmit() {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        // Here you would typically send the data to your backend
        console.log('Form submitted:', this.formData);
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        this.isSubmitting = false;
        
        // Show success message (you could add a toast notification here)
        alert('Thank you for your message! I\'ll get back to you soon.');
      }, 2000);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
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
</style>
