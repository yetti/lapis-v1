<template>
  <div class="relative bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
            >{{ formatDate(post.date) }}</span
          >
          <span
            class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >{{ post.title }}</span
          >
        </h1>
      </div>
      <div class="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
        <nuxt-content :document="post" />

        <footer class="py-10 flex items-center justify-center">
          <NuxtLink to="/blog" class="w-10 inline-block back-link">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-300 hover:bg-blue-500 text-white"
            >
              <!-- Heroicon name: outline/arrow-left -->
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </div>
          </NuxtLink>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
  methods: {
    formatDate(date: Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en', options)
    },
  },
})
</script>

<style scoped>
.back-link {
  @apply mt-2 block border-transparent hover:border-transparent;
}
</style>
