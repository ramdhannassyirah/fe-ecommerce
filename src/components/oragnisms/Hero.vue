<template>
    <div class="relative w-full" @mouseover="stopAutoPlay" @mouseleave="startAutoPlay">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute block w-full h-full transition-opacity duration-700 ease-in-out"
          :class="currentIndex === index ? 'opacity-100' : 'opacity-0'"
        >
          <img
            :src="image"
            class="object-cover w-full h-full"
            alt="Carousel image"
          />
        </div>
      </div>
      <!-- Indicators -->
      <div class="absolute z-30 flex bottom-5 left-1/2 transform -translate-x-1/2 space-x-3">
        <button
          v-for="(image, index) in images"
          :key="'indicator-' + index"
          class="w-3 h-3 rounded-full"
          :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'"
          @click="setCurrentIndex(index)"
        ></button>
      </div>
      <!-- Controls -->
      <button
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        @click="prevSlide"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            class="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        @click="nextSlide"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            class="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
      autoPlay: {
        type: Boolean,
        default: true,
      },
      interval: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        currentIndex: 0,
        timer: null,
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      setCurrentIndex(index) {
        this.currentIndex = index;
      },
      startAutoPlay() {
        if (this.autoPlay) {
          this.timer = setInterval(this.nextSlide, this.interval);
        }
      },
      stopAutoPlay() {
        clearInterval(this.timer);
      },
    },
    mounted() {
      this.startAutoPlay();
    },
    beforeDestroy() {
      this.stopAutoPlay();
    },
  };
  </script>
  
  <style scoped>
  /* Add additional styles if necessary */
  </style>
  