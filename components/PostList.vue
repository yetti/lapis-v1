<template>
  <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
    <post-list-item v-for="post of posts" :key="post.slug" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostListItem from '@/components/PostListItem.vue'

import { PostResult } from '~/types/types'

export default Vue.extend({
  name: 'PostList',
  components: {
    PostListItem,
  },
  props: {
    posts: {
      type: Array as () => Array<PostResult>,
      default: () => [],
    },
  },
})
</script>

<style scoped>
.prose ul > li::before {
  display: none !important;
}
.prose a {
  text-decoration: none !important;
}
.post-date {
  margin-right: 2rem;
  margin-top: 0.8rem;
}
.post-link {
  text-decoration: none;
  color: inherit;
}
.post-link h2 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: normal;
  @apply font-normal text-xl !important;
}
</style>
