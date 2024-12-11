<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="default-styled-tab"
      data-tabs-toggle="#default-styled-tab-content"
      data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
      data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
      role="tablist"
    >
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg"
          id="profile-styled-tab"
          data-tabs-target="#styled-profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Detail
        </button>
      </li>
      <!-- <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="dashboard-styled-tab"
          data-tabs-target="#styled-dashboard"
          type="button"
          role="tab"
          aria-controls="dashboard"
          aria-selected="false"
        >
          Dashboard
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="settings-styled-tab"
          data-tabs-target="#styled-settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          Settings
        </button>
      </li>
      <li role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="contacts-styled-tab"
          data-tabs-target="#styled-contacts"
          type="button"
          role="tab"
          aria-controls="contacts"
          aria-selected="false"
        >
          Contacts
        </button>
      </li> -->
    </ul>
  </div>
  <div id="default-styled-tab-content" class="overflow-auto h-80">
    <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
      id="styled-profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Kondisi: <span class="text-black"> Baru</span>
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Stock: <span class="text-black"> 1</span>
      </p>
      <div class="">
        <p>
          {{ isExpanded ? fullText : limitedText }}
        </p>
        <button @click="toggleContent">
          {{ isExpanded ? "Lebih sedikit detail" : "Lebih banyak detail" }}
        </button>
      </div>
    </div>
    <!-- <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
      id="styled-dashboard"
      role="tabpanel"
      aria-labelledby="dashboard-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong class="font-medium text-gray-800 dark:text-white"
          >Dashboard tab's associated content</strong
        >. Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    </div>
    <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
      id="styled-settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong class="font-medium text-gray-800 dark:text-white"
          >Settings tab's associated content</strong
        >. Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    </div>
    <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
      id="styled-contacts"
      role="tabpanel"
      aria-labelledby="contacts-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong class="font-medium text-gray-800 dark:text-white"
          >Contacts tab's associated content</strong
        >. Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { initFlowbite } from "flowbite";

const fullText = ref(
  `The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
      Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
      iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
      quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
      voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
      enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
      autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
      nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
      voluptas nulla pariatur?`
);

const wordLimit = 40; // Batas jumlah kata yang ditampilkan
const isExpanded = ref(false);

// Memotong teks berdasarkan batas kata
const limitedText = computed(() => {
  const words = fullText.value.split(" ");
  return words.slice(0, wordLimit).join(" ") + "...";
});

const toggleContent = () => {
  isExpanded.value = !isExpanded.value;
};

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
