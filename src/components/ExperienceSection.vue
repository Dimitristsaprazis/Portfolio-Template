<template>
  <section v-if="showExperience" id="experience" class="py-12 sm:py-16 md:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 
        class="text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center"
        :style="{ color: theme?.components?.experience?.title || '#a78bfa' }"
      >
        Experience
      </h2>
      <div class="relative pl-6 sm:pl-8 md:pl-16">
        <!-- Vertical timeline line -->
        <div 
          class="absolute left-1 sm:left-2 md:left-6 top-0 bottom-0 w-0.5 sm:w-1 rounded-full"
          :style="{ backgroundColor: `${theme?.components?.experience?.timeline || '#a78bfa'}30` }"
        ></div>
        <div class="space-y-6 sm:space-y-8">
          <div
            v-for="(item, idx) in experience"
            :key="item.title + item.year"
            class="relative flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            :style="{ backgroundColor: theme?.backgrounds?.card || 'rgba(31, 41, 55, 0.6)' }"
          >
            <!-- Timeline bullet -->
            <div class="timeline-bullet absolute z-10">
              <span 
                class="block w-4 h-4 sm:w-5 sm:h-5 border-3 sm:border-4 border-white dark:border-gray-900 rounded-full shadow-lg"
                :style="{ backgroundColor: theme?.components?.experience?.bullet || '#a78bfa' }"
              ></span>
            </div>
            <div 
              class="font-bold text-base sm:text-lg md:w-32 mb-2 md:mb-0"
              :style="{ color: theme?.components?.experience?.year || '#c7d2fe' }"
            >
              {{ item.year }}
            </div>
            <div class="flex-1">
              <div 
                class="text-lg sm:text-xl font-semibold mb-1 sm:mb-2"
                :style="{ color: theme?.components?.experience?.jobTitle || '#f3f4f6' }"
              >
                {{ item.title }}
              </div>
              <div 
                class="mb-2 text-sm sm:text-base"
                :style="{ color: theme?.components?.experience?.company || '#9ca3af' }"
              >
                {{ item.place }}
              </div>
              <div 
                class="text-sm sm:text-base leading-relaxed"
                :style="{ color: theme?.components?.experience?.description || '#d1d5db' }"
              >
                {{ item.description }}
              </div>
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
    showExperience: Boolean,
    theme: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.timeline-bullet {
  left: -0.75rem;
  top: 1.5rem;
  transform: none;
}
@media (min-width: 640px) {
  .timeline-bullet {
    left: -1rem;
    top: 2rem;
  }
}
@media (min-width: 768px) {
  .timeline-bullet {
    left: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
@media (max-width: 767px) {
  #experience {
    padding-top: 2rem !important;
    padding-bottom: 3rem !important;
  }
}
</style> 