<template>
  <section id="about" class="w-full min-h-screen h-[100vh] py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center relative about-section scroll-mt-custom">
    <div class="flex flex-col md:flex-row w-full px-8 md:px-20 items-stretch justify-center gap-0 md:gap-0 about-content-block">
      <!-- Left: About -->
      <div class="flex-1 flex flex-col justify-center items-center md:items-start pr-0 md:pr-12 text-center md:text-left mb-8 md:mb-0">
        <h2 
          class="text-4xl md:text-5xl font-extrabold mb-4 md:mb-8 leading-tight"
          :style="{ color: theme?.components?.about?.title || '#a78bfa' }"
        >
          About Me
        </h2>
        <p 
          class="text-lg md:text-xl max-w-2xl mb-3 md:mb-6 mx-auto"
          :style="{ color: theme?.components?.about?.bio || '#e5e7eb' }"
        >
          {{ about.bio }}
        </p>
        <div 
          class="text-base italic mb-4 mx-auto"
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
          class="text-2xl font-bold mb-6 md:mb-10"
          :style="{ color: theme?.components?.about?.subtitle || '#c7d2fe' }"
        >
          Skills
        </h3>
        <div class="flex flex-wrap gap-x-6 gap-y-4 w-full max-w-2xl justify-center md:justify-start skills-list">
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
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  background: #6366f1;
  border-radius: 9999px;
  box-shadow: 0 2px 8px 0 rgba(99,102,241,0.10);
  padding: 0.6rem 1.3rem;
  margin: 0.15rem 0.4rem;
  border: none;
  transition: none;
  min-width: unset !important;
  width: auto !important;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  #about {
    margin-top: 4.5rem;
    min-height: unset !important;
    height: auto !important;
  }
  .about-content-block {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .about-content-block > div {
    margin-bottom: 2.5rem;
  }
  .about-content-block > div:last-child {
    margin-bottom: 0;
  }
}
</style> 