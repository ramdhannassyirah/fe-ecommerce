<script setup>
import { RouterLink } from "vue-router";
import { User, ShoppingCart, Search } from "lucide-vue-next";
import { ref } from "vue";
import { useProductsStore } from "@/stores/products.js";

const productsStore = useProductsStore();
const searchQuery = ref(""); // Query pencarian
const isMenuOpen = ref(false);

// Fungsi untuk memfilter produk langsung di store
const handleSearch = () => {
  productsStore.filterProducts(searchQuery.value);
};
</script>

<template>
  <header>
    <nav
      class="flex justify-between items-center gap-4 max-w-7xl mx-auto my-6 px-4 xl:px-0"
    >
      <!-- Logo and Navigation -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-4">
          <!-- Hamburger Menu (Visible on Small Screens) -->
          <div class="md:hidden flex items-center">
            <button @click="isMenuOpen = !isMenuOpen">
              <span class="text-2xl font-bold">☰</span>
            </button>
          </div>
          <h1 class="text-3xl font-bold">SHOP.CO</h1>
        </div>
        <div class="md:flex gap-4 items-center hidden">
          <RouterLink :class="{ 'font-bold': $route.path === '/' }" to="/"
            >Home</RouterLink
          >
          <RouterLink active-class="font-bold" to="/product">Shop</RouterLink>
          <RouterLink active-class="font-bold" to="/new-arrival"
            >New Arrival</RouterLink
          >
          <RouterLink active-class="font-bold" to="/brands">Brands</RouterLink>
        </div>
      </div>

      <!-- Search Bar (Hidden on Small Screens) -->
      <div class="flex-1 hidden md:block">
        <div class="relative">
          <!-- Input Search -->
          <input
            v-model="searchQuery"
            @input="handleSearch"
            class="bg-slate-100 rounded-full py-2 w-full pl-8 pr-4 outline-none"
            placeholder="Search for products..."
            type="search"
          />

          <!-- Search Icon -->
          <Search
            :size="20"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <!-- Icons (Cart and User) -->
      <div class="flex items-center gap-4">
        <RouterLink class="relative" to="/cart">
          <ShoppingCart />
          <span
            class="absolute -top-2.5 -right-2.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white"
          >
            3
          </span>
        </RouterLink>
        <User />
      </div>
    </nav>

    <!-- Dropdown Menu (Visible when hamburger is clicked) -->
    <div
      v-if="isMenuOpen"
      class="absolute top-20 left-0 right-0 bg-white shadow-lg px-4 md:hidden"
    >
      <RouterLink
        :class="{ 'font-bold': $route.path === '/' }"
        to="/"
        class="block pb-2"
        >Home</RouterLink
      >
      <RouterLink active-class="font-bold" to="/product" class="block py-2"
        >Shop</RouterLink
      >
      <RouterLink active-class="font-bold" to="/new-arrival" class="block py-2"
        >New Arrival</RouterLink
      >
      <RouterLink active-class="font-bold" to="/brands" class="block py-2"
        >Brands</RouterLink
      >
    </div>
  </header>
</template>
