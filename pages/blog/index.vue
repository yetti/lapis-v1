<template>
  <section class="mx-auto max-w-screen-sm">
    <h1 class="section-heading">Posts</h1>
    <article-list :articles="articles" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleList from '@/components/ArticleList.vue'

export default Vue.extend({
  components: {
    ArticleList,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'date', 'comments', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
})
</script>
