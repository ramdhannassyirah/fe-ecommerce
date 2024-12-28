<template>
    <section class="max-w-7xl mx-auto my-20 px-4 xl:px-0">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl lg:text-4xl font-extrabold">OUR HAPPY CUSTOMERS</h1>
        <div class="flex gap-2 items-center">
            <ArrowLeft/>
            <ArrowRight/>
        </div>
      </div>
      <div class="overflow-x-auto mt-4 scrollbar-hide">
        <div class="flex gap-4 min-w-max">
          <CustomerCard v-for="index in 10" :key="index" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import CustomerCard from "./common/Card/CustomerCard.vue";
  import { ArrowRight,ArrowLeft } from "lucide-vue-next";
  </script>
  
  <style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* Hilangkan scrollbar di Chrome, Safari */
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none; /* Hilangkan scrollbar di IE dan Edge */
    scrollbar-width: none; /* Hilangkan scrollbar di Firefox */
  }
  </style>
  