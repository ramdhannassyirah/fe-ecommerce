<template>
  <section class="max-w-7xl mx-auto my-16">
    <h1 class="text-4xl font-extrabold text-center">Top Selling</h1>
    <div class="overflow-x-auto mt-4 scrollbar-hide">
      <div class="flex gap-4 min-w-max pt-10">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div class="flex items-center justify-center mt-10">
      <RouterLink to="/product" class="border py-2 rounded-full px-14 font-semibold">
        View All
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import ProductCard from "./common/Card/ProductCard.vue";
import { computed } from "vue";
import { useProductsStore } from "@/stores/products.js";
import { RouterLink } from "vue-router";

const productsStore = useProductsStore();

// Filter produk dengan rating > 3
const filteredProducts = computed(() => {
  return productsStore.products.filter((product) => product.rating?.rate > 4.5);
});

</script>
