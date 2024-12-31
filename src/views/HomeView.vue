<script setup>
import Category from "@/components/CategoryComp.vue";
import Brand from "@/components/common/BrandComp.vue";
import Hero from "@/components/common/HeroComp.vue";
import Customer from "@/components/CustomerComp.vue";
import NewArrivals from "@/components/NewArrivals.vue";
import TopSelling from "@/components/TopSelling.vue";
import { onMounted } from "vue";

</script>

<template>
  <Hero />
  <Brand />
  <NewArrivals />
  <TopSelling/>
  <Category/>
  <Customer/>
</template>
