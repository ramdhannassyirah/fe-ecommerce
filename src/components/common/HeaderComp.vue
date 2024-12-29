<script setup>
import { RouterLink } from "vue-router";
import { User, ShoppingCart,Search } from "lucide-vue-next";
import { ref } from "vue";

const isMenuOpen = ref(false);
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
          <RouterLink to="/product">Shop</RouterLink>
          <RouterLink to="/">On Sale</RouterLink>
          <RouterLink to="/">New Arrival</RouterLink>
          <RouterLink to="/">Brands</RouterLink>
        </div>
      </div>

      <!-- Search Bar (Hidden on Small Screens) -->
      <div class="flex-1 hidden md:block">
        <div class="relative">
          <!-- Input Search -->
          <input
            class="bg-slate-100 rounded-full py-2 w-full pl-8  outline-none"
            placeholder="Cari barang"
            type="search"
          />

          <!-- Search Icon -->
          <Search :size="20"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <!-- Icons (Cart and User) -->
      <div class="flex items-center gap-4">
        <ShoppingCart />
        <User />
      </div>
    </nav>

    <!-- Dropdown Menu (Visible when hamburger is clicked) -->
    <div
      v-if="isMenuOpen"
      class="absolute top-20 left-0 right-0 bg-white shadow-lg p-4 md:hidden"
    >
      <RouterLink to="/product" class="block py-2">Shop</RouterLink>
      <RouterLink to="/" class="block py-2">On Sale</RouterLink>
      <RouterLink to="/" class="block py-2">New Arrival</RouterLink>
      <RouterLink to="/" class="block py-2">Brands</RouterLink>
    </div>

    <!-- Hero Section -->
    <Hero />
  </header>
</template>
