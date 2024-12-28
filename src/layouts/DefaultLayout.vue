<script setup>

import HeaderComp from "@/components/common/HeaderComp.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="">
    <HeaderComp />
    <main>
      <RouterView />
    </main>
  </div>
</template>
