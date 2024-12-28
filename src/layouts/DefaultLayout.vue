<script setup>

import FooterComp from "@/components/common/FooterComp.vue";
import HeaderComp from "@/components/common/HeaderComp.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="">
    <HeaderComp />
    <main>
      <RouterView />
    </main>
    <FooterComp/>
  </div>
</template>
