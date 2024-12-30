<template>
  <div class="max-w-7xl mx-auto px-4 xl:px-0">
    <div class="py-4">
      <BreadCrumbs link="/product" name="Shop" />
    </div>
    <div class="flex flex-col lg:flex-row gap-4 py-4">
      <div class="border rounded-2xl p-6 h-full w-full lg:w-1/4">
        <div class="flex justify-between items-center border-b-2 pb-4">
          <h1 class="text-2xl font-semibold">Filter</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sliders-horizontal"
          >
            <line x1="21" x2="14" y1="4" y2="4" />
            <line x1="10" x2="3" y1="4" y2="4" />
            <line x1="21" x2="12" y1="12" y2="12" />
            <line x1="8" x2="3" y1="12" y2="12" />
            <line x1="21" x2="16" y1="20" y2="20" />
            <line x1="12" x2="3" y1="20" y2="20" />
            <line x1="14" x2="14" y1="2" y2="6" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="16" x2="16" y1="18" y2="22" />
          </svg>
        </div>
        <div class="flex flex-col gap-2 my-4 border-b-2 pb-4 text-gray-500">
          <h1>T-Shirts</h1>
          <h1>Shorts</h1>
          <h1>Shirts</h1>
          <h1>Hoodie</h1>
          <h1>Jeans</h1>
        </div>
        <div class="flex flex-col gap-4 my-4 border-b-2 pb-4">
          <h1 class="text-2xl font-semibold">Price</h1>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            v-model="priceRange"
            class="w-full"
          />
          <p class="text-gray-500">Selected Price: ${{ priceRange }}</p>
        </div>
        <div class="my-4 border-b-2 pb-4">
          <h1 class="text-2xl font-semibold">Dress Style</h1>
          <div class="flex flex-col gap-2 pt-2 text-gray-500">
            <h1>Casual</h1>
            <h1>Formal</h1>
            <h1>Party</h1>
            <h1>Gym</h1>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center md:items-start">
        <h1 class="text-3xl font-semibold pl-4">Casual</h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 flex-1"
        >
          <ProductCard v-for="n in 10" :key="n" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "@/components/common/Card/ProductCard.vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";

const priceRange = ref(20);
</script>
