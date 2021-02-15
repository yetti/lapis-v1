<template>
  <ul>
    <li v-for="article of articles" :key="article.slug" class="post-link">
      <Article :article="article" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '@/components/ArticleListItem.vue'

export default Vue.extend({
  name: 'ArticleList',
  components: {
    Article,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
