<script setup>
import { RouterLink } from "vue-router";
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <!-- Component: Elevated basic breadcrumb -->
  <nav aria-label="Breadcrumb">
    <ol class="flex items-stretch gap-2 list-none">
      <li class="items-center hidden gap-2 md:flex">
        <RouterLink
          to="/"
          class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
        >
          Home
        </RouterLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
          aria-labelledby="title-01 description-01"
          role="graphics-symbol"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </li>
      <li class="items-center hidden gap-2 md:flex">
        <RouterLink active-class="font-bold"
          :to="link"
          class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
        >
          {{ name }}
        </RouterLink>
      </li>
    </ol>
  </nav>
  <!-- End Elevated basic breadcrumb -->
</template>
