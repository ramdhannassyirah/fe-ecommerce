<script setup>
import { onBeforeMount } from "vue";
import { useProductsStore } from "@/stores/products.js";
import {  RouterView } from 'vue-router'

const productsStore = useProductsStore();
onBeforeMount(async () => {
      await productsStore.fetchProducts(); // Pastikan API dipanggil sebelum komponen dirender
    });
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
