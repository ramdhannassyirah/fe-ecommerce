<script setup>
import { RouterLink } from "vue-router";

defineProps({
  product: {
    type: Object,
  },
});

// Fungsi untuk menghasilkan array bintang penuh dan kosong
const generateStars = (rate) => {
  const fullStars = Math.floor(rate); // Bintang penuh
  const halfStar = rate % 1 >= 0.5; // Setengah bintang (opsional)
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Bintang kosong

  return {
    fullStars: Array(fullStars).fill("★"),
    halfStar: halfStar ? "★" : null, // Gunakan setengah bintang jika diperlukan
    emptyStars: Array(emptyStars).fill("☆"),
  };
};
</script>

<template>
  <RouterLink :to="`/product/${product.id}`" class="p-4 max-w-xs overflow-hidden">
    <div class="">
      <img
        :src="product.image"
        class="w-72 h-72 rounded-xl object-contain"
        alt=""
      />
    </div>
    <div class="pt-4 flex flex-col gap-1">
      <h1 class="text-xl font-bold truncate">{{ product.title }}</h1>
      <div class="flex items-center gap-2">
        <div class="text-yellow-500 flex text-lg">
          <!-- Tampilkan bintang sesuai rating -->
          <span v-for="(star, index) in generateStars(product.rating.rate).fullStars" :key="'full-' + index">
            {{ star }}
          </span>
          <span v-if="generateStars(product.rating.rate).halfStar">★</span>
          <span v-for="(star, index) in generateStars(product.rating.rate).emptyStars" :key="'empty-' + index">
            {{ star }}
          </span>
        </div>
        <span class="text-gray-500 text-md">{{ product.rating.rate }}</span>
      </div>
      <h1 class="font-bold text-xl">$ {{ product.price }}</h1>
    </div>
  </RouterLink>
</template>
