<template>
  <section class="max-w-7xl mx-auto my-16">
    <h1 class="text-4xl font-extrabold text-center">Top Selling</h1>
    <div class="overflow-x-auto mt-4 scrollbar-hide">
      <div class="flex gap-4 min-w-max pt-10">
        <ProductCard v-for=" in 10" />
      </div>
    </div>
    <div class="flex items-center justify-center mt-10">
      <button class="border py-2 rounded-full px-14 font-semibold">
        View All
      </button>
    </div>
  </section>
</template>
<script setup>
import ProductCard from "./common/Card/ProductCard.vue";
</script>
