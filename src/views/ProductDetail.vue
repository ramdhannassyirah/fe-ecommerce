<template>
    <section class="max-w-7xl mx-auto px-4">
      <div class="py-6">
        <BreadCrumbs />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Image Section -->
        <div class="flex flex-col gap-4">
          <img
            src="../assets/image/hero2.png"
            class="w-full h-60 sm:h-80 md:h-96 bg-slate-100 rounded-xl object-cover"
            alt="Main Product Image"
          />
          <div class="flex gap-2 overflow-x-auto">
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
              One Life Graphic T-shirt
            </h1>
            <div class="flex items-center gap-2">
              <p class="text-yellow-500">⭐⭐⭐⭐⭐</p>
              <span class="text-gray-500 text-sm">4.5/5</span>
            </div>
            <div class="flex items-center gap-2">
              <h1 class="font-bold text-xl sm:text-2xl text-red-500">$260</h1>
              <span class="line-through text-gray-500">$300</span>
              <span class="text-red-500 text-sm">-40%</span>
            </div>
            <p class="text-gray-600">
              This graphic t-shirt which is perfect for any occasion. Crafted from
              a soft and breathable fabric, it offers superior comfort and style.
            </p>
          </div>
  
          <div class="border-b pb-4 space-y-2">
            <p class="font-medium">Select Colors</p>
            <div class="flex gap-2 items-center">
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 bg-green-800 rounded-full border-2 border-black"
              ></div>
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full"
              ></div>
              <div class="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900 rounded-full"></div>
            </div>
          </div>
  
          <div class="border-b pb-4 space-y-2">
            <p class="font-medium">Choose Size</p>
            <div class="flex gap-2 items-center">
              <button
                v-for="size in sizes"
                :key="size"
                @click="selectedSize = size"
                :class="{
                  'bg-black text-white': selectedSize === size,
                  'border text-black': selectedSize !== size
                }"
                class="py-2 px-4 rounded-full text-sm sm:text-base"
              >
                {{ size }}
              </button>
            </div>
          </div>
  
          <div class="flex gap-4">
            <div class="flex items-center  bg-gray-300 rounded-full gap-4">
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
              class="bg-black  w-full text-white py-3 px-6 rounded-full font-bold hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div class="my-8">
        <h1 class="text-2xl font-bold">Product Details</h1>
        <p class="text-gray-600 mt-4">
          This premium t-shirt is made from 100% organic cotton, ensuring both comfort and sustainability. Designed with a modern fit, it features a crew neckline and durable stitching for lasting quality. The unique graphic print is created using eco-friendly inks, making it a perfect choice for eco-conscious consumers. Whether you're dressing up for a casual outing or looking for a comfy option for a lazy day at home, this t-shirt has got you covered.
        </p>
      </div>
      <div class="my-10">
        <h1 class="text-4xl font-extrabold text-center">YOU MIGHT ALSO LIKE</h1>
        <div class="overflow-x-auto mt-4 scrollbar-hide">
          <div class="flex gap-4 min-w-max pt-10">
            <ProductCard v-for="n in 10" :key="n" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
  import ProductCard from "@/components/common/Card/ProductCard.vue";
  
  const count = ref(1);
  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const selectedSize = ref(sizes[0]);
  
  const increaseCount = () => {
    count.value++;
  };
  
  const decreaseCount = () => {
    if (count.value > 1) {
      count.value--;
    }
  };
  </script>
  