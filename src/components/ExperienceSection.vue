<template>
  <section v-if="showExperience" id="experience" class="py-12 sm:py-16 md:py-24">
    <div class="max-w-4xl mx-auto px-4">
      <h2 
        class="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        :style="{ color: theme?.components?.experience?.title || '#a78bfa' }"
      >
        Experience
      </h2>
      <div class="relative pl-8 md:pl-16">
        <!-- Vertical timeline line -->
        <div 
          class="absolute left-2 md:left-6 top-0 bottom-0 w-1 rounded-full"
          :style="{ backgroundColor: `${theme?.components?.experience?.timeline || '#a78bfa'}30` }"
        ></div>
        <div class="space-y-8">
          <div
            v-for="(item, idx) in experience"
            :key="item.title + item.year"
            class="relative flex flex-col md:flex-row md:items-center gap-4 rounded-xl p-6 shadow"
            :style="{ backgroundColor: theme?.backgrounds?.card || 'rgba(31, 41, 55, 0.6)' }"
          >
            <!-- Timeline bullet -->
            <div class="timeline-bullet absolute z-10">
              <span 
                class="block w-5 h-5 border-4 border-white dark:border-gray-900 rounded-full shadow"
                :style="{ backgroundColor: theme?.components?.experience?.bullet || '#a78bfa' }"
              ></span>
            </div>
            <div 
              class="font-bold text-lg md:w-32"
              :style="{ color: theme?.components?.experience?.year || '#c7d2fe' }"
            >
              {{ item.year }}
            </div>
            <div class="flex-1">
              <div 
                class="text-xl font-semibold"
                :style="{ color: theme?.components?.experience?.jobTitle || '#f3f4f6' }"
              >
                {{ item.title }}
              </div>
              <div 
                class="mb-1"
                :style="{ color: theme?.components?.experience?.company || '#9ca3af' }"
              >
                {{ item.place }}
              </div>
              <div 
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