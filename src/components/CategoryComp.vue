<template>
  <div class="max-w-7xl mx-auto bg-slate-100 rounded-3xl py-16">
    <!-- Heading -->
    <div class="mb-8">
      <h1 class="text-4xl font-extrabold text-center">BROWSE BY DRESS STYLE</h1>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16">
      <!-- Casual -->
      <div class="bg-white w-full lg:col-span-1 col-span-2 h-60 rounded-3xl p-6 relative overflow-hidden">
        <h1 class="text-3xl absolute top-8 left-6 z-10 font-semibold">Casual</h1>
        <div class="absolute inset-0">
          <img
            src="../assets/image/category/casual.png"
            alt="Casual"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Formal -->
      <div class="bg-white col-span-2 w-full h-60 rounded-3xl p-6 relative overflow-hidden">
        <h1 class="text-3xl absolute top-8 left-6 z-10 font-semibold">Formal</h1>
        <div class="absolute inset-0">
          <img
            src="../assets/image/category/formal.png"
            alt="Formal"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Party -->
      <div class="bg-white col-span-2 w-full h-60 rounded-3xl p-6 relative overflow-hidden">
        <h1 class="text-3xl absolute top-8 left-6 z-10 font-semibold">Party</h1>
        <div class="absolute inset-0">
          <img
            src="../assets/image/category/party.png"
            alt="Party"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Gym -->
      <div class="bg-white w-full h-60 lg:col-span-1 col-span-2 rounded-3xl p-6 relative overflow-hidden">
        <h1 class="text-3xl absolute top-8 left-6 z-10 font-semibold">Gym</h1>
        <div class="absolute inset-0">
          <img
            src="../assets/image/category/gym.png"
            alt="Gym"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
