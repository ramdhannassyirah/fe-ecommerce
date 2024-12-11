<template>
  <div class="fixed w-full bottom-0 bg-white z-50   ">
    <div class="flex py-4 max-w-7xl mx-auto justify-between items-center gap-4">
      <div class="flex items-center gap-4 flex-1">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <div class="break-all max-w-md">
            <p>loreshdilsugedsieugsfsjfpodrgpdorjgdojgod;ijgsrhiyfguyefdafjs'epfjspjfgdpjrg ajdoaijwdoiajdoiajwdoiaj ajdapwojdowaijdjfsofsfeshofshefosehfosehf</p>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <InputQuantity />
        <div class="">
          <h1>Total Harga</h1>
          <span>Rp 600.000</span>
        </div>
      </div>
      <div class="space-x-4">
        <ButtonPrimary
          name="Beli Sekarang"
          type="submit"
          class="border border-blue-600 py-4 px-8 text-blue-600 font-bold rounded-lg"
        />
        <ButtonPrimary
          name="Masuk Keranjang"
          type="submit"
          class="bg-blue-600 py-4 px-8 text-white font-bold rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from "../atoms/ButtonPrimary.vue";
import InputQuantity from "../atoms/InputQuantity.vue";

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
