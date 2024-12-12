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
    <div class="grid md:grid-cols-3 items-center lg:grid-cols-4 gap-4  ">
        <CardProducts v-for="(product, index) in products" :key="index"
        :product="product"
        />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Hero from "../components/common/Hero.vue";
import Category from "../components/common/Category.vue";
import CardProducts from "../components/common/Products/CardProducts.vue";

const products = reactive([
  {
    id: 1,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    title: "Apple MacBook Pro 16",
  },
  {
    id: 2,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    title: "Ice Cream ",
  },
  {
    id: 3,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    title: "Apple Iphone 14",
  },
  {
    id:4,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    title: "Sepatu Keren"
  },
  {
    id:4,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
title:"Mobil Keren"
  }

]);
</script>
