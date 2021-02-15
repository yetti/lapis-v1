<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
    <div class="text-sm opacity-50 post-date">
      {{ formatDate(article.date) }}
    </div>
    <h2>{{ article.title }}</h2>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticleListItem',
  props: {
    article: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    formatDate(date: Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en', options)
    },
  },
})
</script>
