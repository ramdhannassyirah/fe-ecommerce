<template>
  <div class="flex justify-center items-center h-screen w-full">
    <div class="text-center">
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <RouterLink class="text-blue-500 hover:underline" to="/">Kembali</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "NotFoundView",
};
</script>
