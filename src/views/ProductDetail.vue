<template>
  <section class="max-w-7xl mx-auto px-4">
    <div class="py-4">
      <BreadCrumbs link="/" name="Product Detail" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Image Section -->
      <div class="flex flex-col gap-4">
        <img
          :src="selectedProduct?.image"
          class="w-full h-60 sm:h-80 md:h-96 rounded-xl object-contain"
          alt="Main Product Image"
        />
        <div class="flex gap-2 overflow-x-auto py-2">
          <img
            src="../assets/image/hero2.png"
            class="w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 rounded-xl object-cover flex-shrink-0"
            alt="Thumbnail 1"
          />
          <img
            src="../assets/image/hero2.png"
            class="w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 rounded-xl object-cover flex-shrink-0"
            alt="Thumbnail 2"
          />
          <img
            src="../assets/image/hero2.png"
            class="w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 rounded-xl object-cover flex-shrink-0"
            alt="Thumbnail 3"
          />
        </div>
      </div>

      <!-- Product Details Section -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 border-b pb-4">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold truncate">
            {{ selectedProduct?.title || 'Loading...' }}
          </h1>
          <div class="flex items-center gap-2">
            <div class="text-yellow-500 flex text-xl">
              <span v-for="(star, index) in generateStars(selectedProduct?.rating?.rate || 0).fullStars" :key="'full-' + index">
                ★
              </span>
              <span v-if="generateStars(selectedProduct?.rating?.rate || 0).halfStar">★</span>
              <span  v-for="(star, index) in generateStars(selectedProduct?.rating?.rate || 0).emptyStars" :key="'empty-' + index">
                ☆
              </span>
            </div>
            <span class="text-gray-500 text-sm">{{ selectedProduct?.rating?.rate || '0' }}/5</span>
          </div>
          <div class="flex items-center gap-2">
            <h1 class="font-bold text-xl sm:text-2xl text-red-500">${{ selectedProduct?.price || '0.00' }}</h1>
            <span class="line-through text-gray-500">$300</span>
            <span class="text-red-500 text-sm">-40%</span>
          </div>
          <p class="text-gray-600">
            {{ selectedProduct?.description || 'No description available.' }}
          </p>
        </div>

        <div class="border-b pb-4 space-y-2">
          <p class="font-medium">Select Colors</p>
          <div class="flex gap-2 items-center">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-green-800 rounded-full border-2 border-black"></div>
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full"></div>
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900 rounded-full"></div>
          </div>
        </div>

        <div class="border-b pb-4 space-y-2">
          <p class="font-medium">Choose Size</p>
          <div class="flex flex-wrap gap-2 items-center">
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              :class="{
                'bg-black text-white': selectedSize === size,
                'border text-black': selectedSize !== size,
              }"
              class="py-2 px-4 rounded-full text-sm sm:text-base"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex items-center bg-gray-300 rounded-full gap-4">
            <button
              class="bg-gray-300 text-xl font-bold text-black w-10 h-10 rounded-full"
              @click="decreaseCount"
            >
              -
            </button>
            <span class="text-lg w-4 text-center font-bold">{{ count }}</span>
            <button
              class="bg-gray-300 text-xl font-bold text-black w-10 h-10 rounded-full"
              @click="increaseCount"
            >
              +
            </button>
          </div>
          <button
            @click="addCart"
            class="bg-black w-full text-white py-3 px-6 rounded-full font-bold hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div class="my-8">
      <h1 class="text-2xl font-bold">Product Details</h1>
      <p class="text-gray-600 mt-4">
        {{ selectedProduct?.description || 'No additional details available.' }}
      </p>
    </div>

    <div class="my-10">
      <h1 class="text-4xl font-extrabold text-center">YOU MIGHT ALSO LIKE</h1>
      <div class="overflow-x-auto mt-4 scrollbar-hide">
        <div class="flex gap-4 min-w-max pt-10">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import ProductCard from "@/components/common/Card/ProductCard.vue";
import { useProductsStore } from "@/stores/products.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const count = ref(1);
const sizes = ["Small", "Medium", "Large", "X-Large"];
const selectedSize = ref(sizes[0]);
const productsStore = useProductsStore();
const productId = route.params.id; // Assume the route has an `id` parameter

const selectedProduct = computed(() => {
  return productsStore.products.find((product) => product.id === Number(productId));
});

const filteredProducts = computed(() => {
  return productsStore.products.filter((product) => product.id !== Number(productId));
});

const increaseCount = () => {
  count.value++;
};

const decreaseCount = () => {
  if (count.value > 1) {
    count.value--;
  }
};

const addCart = () => {
  router.push("/cart");
};

// Fungsi untuk menghitung jumlah bintang
const generateStars = (rate) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return {
    fullStars: Array(fullStars).fill("★"),
    halfStar: halfStar ? "★" : null,
    emptyStars: Array(emptyStars).fill("☆"),
  };
};
</script>
