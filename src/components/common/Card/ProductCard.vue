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
    <div class="pt-4">
      <h1 class="text-lg font-bold truncate">T Shirt</h1>
      <p>bintang</p>
      <h1 class="font-bold text-lg">$120</h1>
    </div>
  </RouterLink>
</template>
