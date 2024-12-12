<template>
  <div class="sticky w-full bottom-0 bg-white z-50  mt-20 px-2 ">
    <div class="flex py-4 max-w-7xl mx-auto justify-between items-center gap-4">
      <div class=" items-center gap-4 flex-1 hidden md:flex">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <div class="break-all max-w-md">
            <p>loreshdilsugedsieugsfsjfpodrgpdorjgdojgod;ijgsrhiyfguyefdafjs'epfjspjfgdpjrg ajdoaijwdoiajdoiajwdoiaj ajdapwojdowaijdjfsofsfeshofshefosehfosehf</p>
        </div>
      </div>
      <div class=" gap-4 items-center hidden md:flex">
        <InputQuantity />
        <div class="">
          <h1>Total Harga</h1>
          <span>Rp 600.000</span>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4 ">
        <ButtonPrimary
          name="Beli Sekarang"
          type="submit"
          class="border border-blue-600 py-4 px-8 text-blue-600 font-bold rounded-lg text-sm"
        />
        <ButtonPrimary
          name="Masuk Keranjang"
          type="submit"
          class="bg-blue-600 py-4 px-8 text-white font-bold rounded-lg text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from "../common/ButtonPrimary.vue";
import InputQuantity from "../common/InputQuantity.vue";

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
