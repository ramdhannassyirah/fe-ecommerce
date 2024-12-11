<template>
  <nav class="max-w-7xl mx-auto">
    <div class="flex items-center w-full p-4 gap-8">
      <div class="">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Flowbite</span
          >
        </a>
      </div>
      <div class="flex-1">
        <InputSearch />
      </div>

      <button
        type="button"
        class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-center"
      >
        <ShoppingCart />

        <div
          class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
        >
          8
        </div>
      </button>

      <div class="border bg-blue-600 text-blue-600 h-10 rounded-lg">|</div>
      <div class="space-x-4">
        <ButtonPrimary
          name="Masuk"
          type="submit"
          class="bg-blue-600 py-2 px-4 text-white font-semibold rounded-lg"
        />
        <ButtonPrimary
          name="Daftar"
          type="submit"
          class="border border-blue-600 px-4 py-2 text-blue-600 font-semibold rounded-lg"
        />
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ShoppingCart } from "lucide-vue-next";

import InputSearch from "../atoms/InputSearch.vue";
import ButtonPrimary from "../atoms/ButtonPrimary.vue";
</script>
