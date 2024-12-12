<template>
  <div class="flex gap-2">
    <div class="w-14">
      <Smartphone class="w-14 h-14 text-blue-600" />
      <p class="text-center">Pulsa</p>
    </div>
    <div class="w-14">
      <SmartphoneCharging class="w-14 h-14 text-blue-600" />
      <p class="text-center">Listrik</p>
    </div>
  </div>
</template>

<script setup>
import { Smartphone, SmartphoneCharging } from "lucide-vue-next";
</script>
