<template>
  <!-- Mobile menu, show/hide based on menu state. -->
  <div v-if="showMobileMenu" id="mobile-menu" class="sm:hidden">
    <div class="pt-2 pb-3 space-y-1">
      <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
      <NuxtLink
        :to="{ name: 'blog' }"
        class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >Blog</NuxtLink
      >
      <NuxtLink
        :to="{ name: 'projects' }"
        class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >Projects</NuxtLink
      >
      <a
        href="https://github.com/yetti"
        class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >GitHub</a
      >
      <a
        href="https://twitter.com/yettibot"
        class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >Twitter</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    showMobileMenu: {
      type: Boolean,
      default: () => false,
    },
  },
})
</script>
