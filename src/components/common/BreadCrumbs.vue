<template>
  <!-- Component: Elevated basic breadcrumb -->
  <nav aria-label="Breadcrumb">
    <ol class="flex items-stretch gap-2 px-4 list-none ">
      <li class="items-center hidden gap-2 md:flex">
        <a
          href="#"
          class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
          >Home</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
          aria-labelledby="title-01 description-01"
          role="graphics-symbol"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </li>
      <li class="items-center hidden gap-2 md:flex">
        <a
          href="#"
          class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
          >Shop</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
          aria-labelledby="title-02 description-02"
          role="graphics-symbol"
        >
        
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </li>
      <li class="flex items-center gap-2">
        <a
          href="#"
          class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
          >Man</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
          aria-labelledby="title-03 description-03"
          role="graphics-symbol"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </li>
      <li class="flex items-center flex-1 gap-2">
        <a
          href="#"
          aria-current="page"
          class="pointer-events-none max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-400"
          >T-Shirt</a
        >
      </li>
    </ol>
  </nav>
  <!-- End Elevated basic breadcrumb -->
</template>
