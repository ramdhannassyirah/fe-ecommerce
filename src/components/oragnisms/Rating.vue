<template>
  <div class="">
    <div class="my-4">
      <h1 class="text-3xl font-semibold">Ulasan</h1>
    </div>
    <Rate />
    <div class="mt-4 grid md:grid-cols-3 justify-items-center">
      <CardRating v-for="(item, index) in 3" :key="index" />
    </div>
    <div class="text-center mt-8">
      <ButtonPrimary class="w-full hover:bg-blue-200 font-bold py-2 rounded-full text-blue-500 transition-all duration-300" name="Lihat Selengkapnya" />
    </div>
  </div>
</template>
<script setup>
import ButtonPrimary from "../atoms/ButtonPrimary.vue";
import CardRating from "../moleculs/Card/CardRating.vue";
import Rate from "../moleculs/Rate.vue";
</script>
