<template>
  <div class="max-w-7xl mx-auto px-4 min-h-screen ">
    <div class="grid md:grid-cols-2 gap-4">
      <ImageProduct />
      <div class="flex flex-col gap-4">
        <div class="break-all">
          <h1 class="text-3xl font-semibold">
            Nama Barang
            jdajdwoadjaidjawdja;wdjpawdojpawdjaowjdawodjapowjdawodjapowjdawdojpajfpefmsejofopsef
          </h1>
          <div class="flex gap-2 mt-4">
            <span class="">Terjual (3)</span>
            <span>Diskusi (1)</span>
          </div>
        </div>
        <h2 class="text-3xl font-semibold">Rp 600.000</h2>
        <div class="">
          <TabsNav />
        </div>
      </div>
    </div>
    <div class="">
        <Rating/>
    </div>
  </div>
  <NavCart />
</template>
<script setup>
import ImageProduct from "../../components/moleculs/ImageProduct.vue";
import TabsNav from "../../components/moleculs/TabsNav.vue";
import NavCart from "../../components/moleculs/NavCart.vue";
import Rating from "../../components/oragnisms/Rating.vue";

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
