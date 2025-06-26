<template>
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
</template>

<script>
export default {
  name: 'ExperienceSection',
  props: {
    experience: Array,
    showExperience: Boolean
  }
}
</script>

<style scoped>
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
</style> 