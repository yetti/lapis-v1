<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <header class="relative">
        <navbar />
      </header>
      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <Nuxt />
      </main>
    </div>
  </div>
  <!-- <fragment>
    <header class="mx-auto p-5 mb-3 text-lg">
      <navbar />
    </header>
    <main class="container mx-auto p-5">
      <Nuxt />
    </main>
  </fragment> -->
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
  data() {
    return {
      showNav: false,
    }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav
    },
  },
})
</script>
