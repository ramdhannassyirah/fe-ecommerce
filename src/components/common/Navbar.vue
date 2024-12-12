<template>
  <nav class="max-w-7xl mx-auto">
    <div class="flex items-center w-full p-4 gap-8">
      <div class="hidden md:flex">
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
      <div v-if="!login" class="space-x-4">
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
      <div v-if="login" class="">
        <div
          class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ring-2 ring-blue-600 dark:bg-gray-600"
        >
          <svg
            class="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      
    </div>
    
  </nav>
</template>
<script setup>
import { ShoppingCart } from "lucide-vue-next";
import InputSearch from "../common/InputSearch.vue";
import ButtonPrimary from "../common/ButtonPrimary.vue";
import { ref } from "vue";

const login = ref(true)
</script>
