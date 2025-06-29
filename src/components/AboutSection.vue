<template>
  <section id="about" class="w-full min-h-screen h-[100vh] py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center relative about-section scroll-mt-custom">
    <div class="flex flex-col md:flex-row w-full px-4 sm:px-8 md:px-20 items-stretch justify-center gap-0 md:gap-0 about-content-block">
      <!-- Left: About -->
      <div class="flex-1 flex flex-col justify-center items-center md:items-start pr-0 md:pr-12 text-center md:text-left mb-8 md:mb-0">
        <h2 
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight"
          :style="{ color: theme?.components?.about?.title || '#a78bfa' }"
        >
          About Me
        </h2>
        <p 
          class="text-base sm:text-lg md:text-xl max-w-2xl mb-4 md:mb-6 mx-auto leading-relaxed"
          :style="{ color: theme?.components?.about?.bio || '#e5e7eb' }"
        >
          {{ about.bio }}
        </p>
        <div 
          class="text-sm sm:text-base italic mb-6 md:mb-4 mx-auto max-w-lg"
          :style="{ color: theme?.components?.about?.quote || '#9ca3af' }"
        >
          "{{ about.quote }}"
        </div>
      </div>
      <!-- Accent Line -->
      <div 
        class="hidden md:flex flex-shrink-0 w-0.5 bg-gradient-to-b mx-8 rounded-full"
        :style="{ 
          background: `linear-gradient(to bottom, ${theme?.components?.about?.accentLine || '#a78bfa'}80, ${theme?.components?.about?.accentLine || '#a78bfa'}10)`
        }"
      ></div>
      <!-- Right: Skills -->
      <div class="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-12 text-center md:text-left">
        <h3 
          class="text-xl sm:text-2xl font-bold mb-6 md:mb-10"
          :style="{ color: theme?.components?.about?.subtitle || '#c7d2fe' }"
        >
          Skills
        </h3>
        <div class="flex flex-wrap gap-2 sm:gap-3 w-full max-w-2xl justify-center md:justify-start skills-list">
          <span 
            v-for="(skill, i) in skills" 
            :key="skill" 
            class="skill-badge"
            :style="{ 
              backgroundColor: theme?.backgrounds?.skill || '#6366f1',
              color: theme?.fontColors?.button || '#ffffff'
            }"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    about: Object,
    skills: Array,
    theme: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.skills-list {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  gap: 0.75rem 0.5rem !important;
}
.skill-badge {
  display: inline-flex !important;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border-radius: 9999px;
  box-shadow: 0 2px 8px 0 rgba(99,102,241,0.10);
  padding: 0.5rem 1rem;
  margin: 0.15rem 0.4rem;
  border: none;
  transition: all 0.2s ease;
  min-width: unset !important;
  width: auto !important;
  box-sizing: border-box;
  cursor: default;
}
.skill-badge:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px 0 rgba(99,102,241,0.20);
}
@media (max-width: 767px) {
  #about {
    margin-top: 4.5rem;
    min-height: unset !important;
    height: auto !important;
    padding-top: 2rem !important;
    padding-bottom: 3rem !important;
  }
  .about-content-block {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .about-content-block > div {
    margin-bottom: 3rem;
  }
  .about-content-block > div:last-child {
    margin-bottom: 0;
  }
  .skill-badge {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
    margin: 0.2rem 0.3rem;
  }
}
@media (max-width: 480px) {
  .skill-badge {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
    margin: 0.15rem 0.25rem;
  }
}
</style> 