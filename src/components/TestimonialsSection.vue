<template>
  <section v-if="showTestimonials" id="testimonials" class="py-12 sm:py-16 md:py-24 overflow-x-hidden">
    <div class="max-w-3xl mx-auto px-2 sm:px-6 overflow-x-hidden">
      <h2 
        class="text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center"
        :style="{ color: theme?.components?.testimonials?.title || '#a78bfa' }"
      >
        Testimonials
      </h2>
      <div class="relative flex items-center justify-center min-h-[180px]">
        <!-- Navigation Buttons -->
        <button
          @click="$emit('goToTestimonial', currentTestimonial - 1)"
          class="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          :style="{ 
            backgroundColor: theme?.components?.testimonials?.navButton || 'rgba(167, 139, 250, 0.8)',
            width: '48px', height: '48px', minWidth: '48px', minHeight: '48px',
            padding: 0
          }"
          :disabled="currentTestimonial === 0"
          aria-label="Previous testimonial"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <transition name="testimonial-fade" mode="out-in">
          <div
            :key="currentTestimonial"
            ref="testimonialSlide"
            class="rounded-2xl p-4 sm:p-6 shadow-lg w-full max-w-md flex-shrink-0 transition-all duration-300 mx-auto"
            :style="{ 
              backgroundColor: theme?.backgrounds?.card || 'rgba(31, 41, 55, 0.6)',
              color: theme?.components?.testimonials?.quote || '#e5e7eb',
              overflow: 'hidden'
            }"
            style="touch-action: pan-y;"
            @touchstart="$emit('onTouchStart', $event)"
            @touchmove="$emit('onTouchMove', $event)"
            @touchend="$emit('onTouchEnd')"
          >
            <div class="mb-3 sm:mb-2 text-base sm:text-lg italic flex items-start gap-2 leading-relaxed">
              <svg 
                class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" 
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
              class="font-bold text-right text-sm sm:text-base"
              :style="{ color: theme?.components?.testimonials?.author || '#c7d2fe' }"
            >
              - {{ testimonials[currentTestimonial].author }}
            </div>
          </div>
        </transition>
        <button
          @click="$emit('goToTestimonial', currentTestimonial + 1)"
          class="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          :style="{ 
            backgroundColor: theme?.components?.testimonials?.navButton || 'rgba(167, 139, 250, 0.8)',
            width: '48px', height: '48px', minWidth: '48px', minHeight: '48px',
            padding: 0
          }"
          :disabled="currentTestimonial === testimonials.length - 1"
          aria-label="Next testimonial"
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
@media (max-width: 767px) {
  #testimonials {
    padding-top: 2rem !important;
    padding-bottom: 3rem !important;
    overflow-x: hidden;
  }
  .max-w-3xl {
    overflow-x: hidden;
  }
}
</style> 