<script>
import { RouterLink } from 'vue-router';

</script>
<template>
    <section class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 xl:px-0  items-center justify-items-center ">
            <div class="">
                <div class="flex flex-col gap-4">
                    <h1 class="text-5xl font-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <RouterLink to="/product" class="px-8 bg-black inline-flex self-start text-white py-3 rounded-full hover:bg-gray-800">Shop Now</RouterLink>
                </div>
                <div class="flex flex-wrap gap-4 items-center mt-6 ">
                    <div class="">
                        <h1 class="text-2xl font-semibold">200+</h1>
                        <p>International Brands</p>
                    </div>
                    <div class="">
                        <h1 class="text-2xl font-semibold">2,000+</h1>
                        <p>High-Quality Products</p>
                    </div>
                    <div class="">
                        <h1 class="text-2xl font-semibold">30,000+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
            <div class="">
                <img src="../../assets/image/hero2.png" alt="">
            </div>
    </section>
</template>