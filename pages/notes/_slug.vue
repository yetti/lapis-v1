<template>
  <article class="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <div class="lead">
      <span class="text-sm opacity-50">{{ formatDate(note.date) }}</span>
      <h1 class="text-lg">{{ note.title }}</h1>
    </div>
    <div class="markdown"><nuxt-content :document="note" /></div>

    <footer>
      <NuxtLink to="/posts" class="w-5 inline-block">
        <span
          class="iconify"
          data-icon="ri:arrow-left-line"
          data-inline="false"
        ></span>
      </NuxtLink>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const note = await $content('notes', params.slug).fetch()

    return { note }
  },
  methods: {
    formatDate(date: Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en', options)
    },
  },
})
</script>
