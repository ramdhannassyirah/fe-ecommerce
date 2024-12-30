<template>
  <div class="max-w-7xl mx-auto px-4 xl:px-0">
    <BreadCrumbs class="py-4" link="/cart" name="Cart" />
    <h1 class="text-4xl font-extrabold mb-8">Your Cart</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2 px-4 xl:px-0">
        <CartCard v-for="(item, index) in cartItems" :key="index" @increment="incrementQuantity(item)" @decrement="decrementQuantity(item)"  @remove="removeItem(item.id)"  :item="item" />
      </div>
      <!-- Order Summary -->
      <div>
        <div class="border rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          <div class="flex justify-between mb-2">
            <p class="text-gray-500">Subtotal</p>
            <p class="font-bold">${{ subtotal }}</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="text-gray-500">Discount ({{ discountRate }}%)</p>
            <p class="text-red-500">-${{ discount }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="text-gray-500">Delivery Fee</p>
            <p class="font-bold">${{ deliveryFee }}</p>
          </div>
          <div class="flex justify-between font-bold text-lg mb-4">
            <p>Total</p>
            <p>${{ total }}</p>
          </div>
          <div class="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              v-model="promoCode"
              class="flex-1 px-4 py-2 border rounded"
            />
            <button
              @click="applyPromoCode"
              class="bg-black text-white px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>
          <button
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadCrumbs from "@/components/common/BreadCrumbs.vue";
import CartCard from "@/components/common/Card/CartCard.vue";
import { ref, computed } from "vue";

// Mock data for cart items
const cartItems = ref([
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt Jacket",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
  },
]);

const promoCode = ref("");
const discountRate = 20; // Percentage
const deliveryFee = 15;

const subtotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);
const discount = computed(() => (subtotal.value * discountRate) / 100);
const total = computed(() => subtotal.value - discount.value + deliveryFee);

function incrementQuantity(item) {
  item.quantity++;
}

function decrementQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--;
  }
}

function removeItem(itemId) {
  cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
}

function applyPromoCode() {
  // Handle promo code application logic here
  alert(`Promo code "${promoCode.value}" applied!`);
}
</script>

<style scoped>
/* Additional styles for buttons or other elements */
</style>
