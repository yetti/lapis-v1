<template>
  <div class="">
    <header class="mx-auto p-5 mb-3 text-lg">
      <nav class="flex justify-between">
        <div class="flex flex-row justify-between">
          <div class="lowercase"><NuxtLink to="/">yetti.io</NuxtLink></div>
        </div>
        <div>
          <ul class="flex flex-row">
            <li class="pr-5">
              <NuxtLink to="/posts" class="inline-flex items-center nav-item">
                <span
                  class="iconify"
                  data-icon="ri:booklet-line"
                  data-inline="false"
                ></span>
                <span class="sr-only">Posts</span>
              </NuxtLink>
            </li>
            <li class="pr-5">
              <NuxtLink to="/notes" class="inline-flex items-center nav-item">
                <span
                  class="iconify"
                  data-icon="ri:sticky-note-line"
                  data-inline="false"
                ></span>
                <span class="sr-only">Notes</span>
              </NuxtLink>
            </li>
            <li class="pr-5">
              <NuxtLink
                to="https://github.com/yetti"
                class="inline-flex items-center nav-item"
              >
                <span
                  class="iconify"
                  data-icon="ri:github-fill"
                  data-inline="false"
                ></span>
                <span class="sr-only">GitHub</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="inline-flex items-center nav-item">
                <span
                  class="iconify"
                  data-icon="ri:user-line"
                  data-inline="false"
                ></span>
                <span class="sr-only">About</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="container mx-auto p-5">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
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
