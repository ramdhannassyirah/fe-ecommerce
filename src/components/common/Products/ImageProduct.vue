<template>
    <div class="grid gap-4">
      <!-- Gambar utama -->
      <div>
        <img
          class="object-cover object-center w-full h-auto max-w-full rounded-lg aspect-[4/3]"
          :src="currentImage"
          alt="Selected Image"
        />
      </div>
  
      <!-- Scrollable thumbnail grid -->
      <div class="flex gap-4 overflow-x-auto">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="shrink-0 w-32" 
        >
          <img
            class="h-auto w-full cursor-pointer object-cover object-center rounded-lg aspect-[4/3]"
            :src="image"
            alt="Thumbnail"
            @click="changeImg(image)"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Gambar utama yang ditampilkan
  const currentImage = ref(
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  );
  
  // Daftar gambar untuk grid kecil
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  ];
    
  // Fungsi untuk mengganti gambar utama
  const changeImg = (image) => {
    currentImage.value = image;
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya tambahan jika diperlukan */
  </style>
  