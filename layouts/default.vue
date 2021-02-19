<template>
  <fragment>
    <header class="mx-auto p-5 mb-3 text-lg">
      <navbar />
    </header>
    <main class="container mx-auto p-5">
      <Nuxt />
    </main>
  </fragment>
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

<style>
.layout {
  max-width: 50em !important;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

a {
  opacity: 0.7;
  transition-duration: 0.2s;
}

a:hover {
  opacity: 1;
}

.nav-title.posts {
  margin-left: -3.4rem;
}

.nav-title.code {
  margin-left: -6.3rem;
}

.nav-title.about {
  margin-left: -8.4rem;
}

.nav-item .nav-title {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  @apply text-base;
}

.nav-item:hover .nav-title {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s linear;
  text-align: right;
}

.section-heading {
  @apply flex text-3xl;
  margin-bottom: 1.5em;
}
</style>
