<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav>
      <div>
        <h1>SHOP.CO</h1>
      </div>
      <div class="">
        <RouterLink to="/"> Shop </RouterLink>
        <RouterLink to="/"> On Sale </RouterLink>
        <RouterLink to="/"> New Arrival </RouterLink>
        <RouterLink to="/"> Brands </RouterLink>
      </div>
      <div class="">
        <input class="bg-slate-200 rounded-full py-1" placeholder="Cari barang" type="search">
      </div>
    </nav>
  </header>
</template>
