<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex space-x-2">
          <NuxtLink to="/" :exact="true"> yetti.io </NuxtLink>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-2">
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <NuxtLink :to="{ name: 'blog' }"> Blog </NuxtLink>
          <NuxtLink :to="{ name: 'projects' }"> Projects </NuxtLink>
          <a href="https://github.com/yetti">
            <span
              class="iconify h-6 w-6"
              data-icon="carbon:logo-github"
              data-inline="false"
            ></span>
            <span class="sr-only">GitHub</span>
          </a>
          <a rel="me" href="https://ruby.social/@yetti">
            <span
              class="iconify h-6 w-6"
              data-icon="mdi:mastodon"
              data-inline="false"
            ></span>
            <span class="sr-only">Mastodon</span>
          </a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              v-if="!showMobileMenu"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              v-if="showMobileMenu"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <mobile-menu :show-mobile-menu="showMobileMenu" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import MobileMenu from '@/components/navigation/MobileMenu.vue'

export default Vue.extend({
  components: {
    MobileMenu,
  },
  data() {
    return {
      showMobileMenu: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
  },
})
</script>

<style scoped>
a {
  @apply border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2;
}

a.nuxt-link-active,
a.nuxt-link-exact-active {
  @apply border-blue-500 text-gray-900 border-b-2;
}
</style>
