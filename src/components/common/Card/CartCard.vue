<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

defineEmits(["increment", "decrement", "remove"]);
</script>

<template>
  <div class="flex items-center justify-between border-b py-4 flex-wrap">
    <div class="flex items-center gap-4 flex-1 min-w-[250px]">
      <div class="w-20 h-20 bg-gray-200 rounded">
        <img :src="item.image" alt="Product Image" class="w-full h-full" />
      </div>
      <div>
        <h2 class="font-bold text-lg break-all">{{ item.name }}</h2>
        <p class="text-sm text-gray-500">Size: {{ item.size }}</p>
        <p class="text-sm text-gray-500">Color: {{ item.color }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4 mt-4 lg:mt-0">
      <div class="flex items-center border rounded">
        <button @click="$emit('decrement', item)" class="px-2 py-1 hover:bg-gray-200">-</button>
        <span class="px-4">{{ item.quantity }}</span>
        <button @click="$emit('increment', item)" class="px-2 py-1 hover:bg-gray-200">+</button>
      </div>
      <p class="font-bold text-lg">${{ item.price }}</p>
      <button @click="$emit('remove', item.id)" class="text-red-500 hover:text-red-700">🗑️</button>
    </div>
  </div>
</template>
