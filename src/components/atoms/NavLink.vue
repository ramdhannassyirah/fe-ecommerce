<template>
  <RouterLink
    :to="to"
    >
    {{ title }}
  </RouterLink>
</template>
<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  title: String,
  to: String,
});
</script>
