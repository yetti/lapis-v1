<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <header class="relative">
        <navbar />
      </header>
      <main class="mt-16 mx-auto max-w-7xl px-6 sm:mt-24">
        <Nuxt />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/navigation/Navbar.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      showNav: false,
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://yetti.io' + this.$route.path,
        },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav
    },
  },
})
</script>
