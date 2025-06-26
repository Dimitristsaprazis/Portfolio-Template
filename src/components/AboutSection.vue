<template>
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
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    about: Object,
    skills: Array
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
.skill-badge:hover {
  box-shadow: 0 4px 16px 0 rgba(99,102,241,0.18);
  transform: translateY(-2px) scale(1.04);
  background: linear-gradient(90deg, #e0e7ff 60%, #6366f1 100%);
  color: #fff;
  border-color: #6366f1;
}
</style> 