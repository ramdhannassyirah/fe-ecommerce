<script setup>
import NewsletterComp from "./NewsletterComp.vue";
</script>

<template>
  <div>
    <!-- Newsletter Section -->
    <div class="w-full px-4 xl:px-0 mb-20">
      <NewsletterComp />
    </div>

    <!-- Footer Section -->
    <footer class="pt-10 w-full px-4 xl:px-0 bg-gray-100">
      <!-- Main Footer Content -->
      <div class="flex flex-col lg:flex-row max-w-7xl justify-between mx-auto gap-8">
        <!-- Branding Section -->
        <div class="max-w-sm flex flex-col gap-4">
          <h1 class="text-3xl font-bold">SHOP.CO</h1>
          <p class="text-gray-600">
            We have clothes that suit your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>

        <!-- Navigation Links -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
          <div>
            <h1 class="text-lg font-semibold">COMPANY</h1>
            <ul class="mt-2 space-y-1 text-gray-600">
              <li><a href="#" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h1 class="text-lg font-semibold">HELP</h1>
            <ul class="mt-2 space-y-1 text-gray-600">
              <li><a href="#" class="hover:underline">Contact Us</a></li>
              <li><a href="#" class="hover:underline">Shipping</a></li>
              <li><a href="#" class="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h1 class="text-lg font-semibold">FAQ</h1>
            <ul class="mt-2 space-y-1 text-gray-600">
              <li><a href="#" class="hover:underline">Payment</a></li>
              <li><a href="#" class="hover:underline">Sizing Guide</a></li>
              <li><a href="#" class="hover:underline">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h1 class="text-lg font-semibold">RESOURCES</h1>
            <ul class="mt-2 space-y-1 text-gray-600">
              <li><a href="#" class="hover:underline">Blog</a></li>
              <li><a href="#" class="hover:underline">Affiliate Program</a></li>
              <li><a href="#" class="hover:underline">Store Locator</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="py-6 max-w-7xl mx-auto text-center text-gray-500 text-sm border-t border-gray-300 mt-8">
        <p>&copy; 2024 Shop.co. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
