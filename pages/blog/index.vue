<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ formatDate(article.date) }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'date', 'comments', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
  methods: {
    formatDate(date: Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en', options)
    },
  },
})
</script>
