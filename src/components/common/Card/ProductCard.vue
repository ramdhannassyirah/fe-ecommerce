<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <RouterLink to="/product/1" class="p-4 max-w-md overflow-hidden">
    <div class="">
      <img
        src="../../../assets/image/hero2.png"
        class="w-72 h-72 bg-slate-100 rounded-xl object-cover"
        alt=""
      />
    </div>
    <div class="pt-4 flex flex-col gap-1">
      <h1 class="text-xl font-bold truncate">T Shirt</h1>
      <div class="flex items-center gap-2">
        <p class="text-yellow-500">⭐⭐⭐⭐⭐</p>
        <span class="text-gray-500 text-sm">4.5/5</span>
      </div>
      <h1 class="font-bold text-xl">$120</h1>
    </div>
  </RouterLink>
</template>
