<template>
  <!-- Mobile menu, show/hide based on menu state. -->
  <div v-if="showMobileMenu" id="mobile-menu" class="sm:hidden">
    <div class="pt-2 pb-3 space-y-1">
      <!-- Current: "", Default: "" -->
      <NuxtLink :to="{ name: 'blog' }">Blog</NuxtLink>
      <NuxtLink :to="{ name: 'projects' }">Projects</NuxtLink>
      <a href="https://github.com/yetti">GitHub</a>
      <a href="https://twitter.com/yettibot">Twitter</a>
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

<style scoped>
a {
  @apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium;
}

a.nuxt-link-active,
a.nuxt-link-exact-active {
  @apply bg-indigo-50 border-indigo-500 text-indigo-700;
}
</style>
