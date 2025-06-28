<template>
  <section v-if="showTestimonials" id="testimonials" class="py-12 sm:py-16 md:py-24">
    <div class="max-w-3xl mx-auto px-4">
      <h2 
        class="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        :style="{ color: theme?.components?.testimonials?.title || '#a78bfa' }"
      >
        Testimonials
      </h2>
      <div class="relative flex items-center justify-center">
        <!-- Navigation Buttons -->
        <button
          @click="$emit('goToTestimonial', currentTestimonial - 1)"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white rounded-full p-2 shadow transition disabled:opacity-30"
          :style="{ 
            backgroundColor: theme?.components?.testimonials?.navButton || 'rgba(167, 139, 250, 0.8)'
          }"
          :disabled="currentTestimonial === 0"
          style="display: flex;"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <transition name="testimonial-fade" mode="out-in">
          <div
            :key="currentTestimonial"
            ref="testimonialSlide"
            class="rounded-2xl p-6 shadow min-w-[80vw] max-w-[80vw] md:min-w-[480px] md:max-w-[480px] flex-shrink-0 transition-all duration-300"
            :style="{ 
              backgroundColor: theme?.backgrounds?.card || 'rgba(31, 41, 55, 0.6)',
              color: theme?.components?.testimonials?.quote || '#e5e7eb'
            }"
            style="touch-action: pan-y;"
            @touchstart="$emit('onTouchStart', $event)"
            @touchmove="$emit('onTouchMove', $event)"
            @touchend="$emit('onTouchEnd')"
          >
            <div class="mb-2 text-lg italic flex items-start gap-2">
              <svg 
                class="w-6 h-6 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                viewBox="0 0 24 24"
                :style="{ color: theme?.components?.testimonials?.icon || '#a78bfa' }"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m2 0a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v6z" />
              </svg>
              "{{ testimonials[currentTestimonial].quote }}"
            </div>
            <div 
              class="font-bold text-right"
              :style="{ color: theme?.components?.testimonials?.author || '#c7d2fe' }"
            >
              - {{ testimonials[currentTestimonial].author }}
            </div>
          </div>
        </transition>
        <button
          @click="$emit('goToTestimonial', currentTestimonial + 1)"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white rounded-full p-2 shadow transition disabled:opacity-30"
          :style="{ 
            backgroundColor: theme?.components?.testimonials?.navButton || 'rgba(167, 139, 250, 0.8)'
          }"
          :disabled="currentTestimonial === testimonials.length - 1"
          style="display: flex;"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    testimonials: Array,
    showTestimonials: Boolean,
    currentTestimonial: Number,
    theme: {
      type: Object,
      default: {}
    }
  },
  emits: ['goToTestimonial', 'onTouchStart', 'onTouchMove', 'onTouchEnd']
}
</script>

<style scoped>
.testimonial-fade-enter-active, .testimonial-fade-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.testimonial-fade-enter-from, .testimonial-fade-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.testimonial-fade-leave-from, .testimonial-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style> 