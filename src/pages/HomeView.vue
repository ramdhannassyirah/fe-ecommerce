<template>
  <div class="max-w-7xl mx-auto">
    <Hero
      :images="[
        'https://images.unsplash.com/photo-1557683316-973673baf926?fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=800&q=80',
      ]"
    />
    <div class="my-4">
        <Category/>
    </div>
    <div class="flex gap-4 flex-wrap justify-between ">
        <CardProducts v-for="(item, index) in 10" :key="index"/>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/oragnisms/Hero.vue";
import Category from "../components/moleculs/Category.vue";
import CardProducts from "../components/moleculs/Card/CardProducts.vue";
</script>
