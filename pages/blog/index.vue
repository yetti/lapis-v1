<template>
  <div class="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          Blog
        </h2>
        <div class="mt-3 sm:mt-4 lg:items-center">
          <p class="text-xl text-gray-500">
            Infrequently updated posts on tech and random topics.
          </p>
        </div>
      </div>
      <post-list :posts="posts" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '@/components/PostList.vue'

import { PostResult } from '~/types/types'

export default Vue.extend({
  components: {
    PostList,
  },
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'date', 'comments', 'description', 'categories', 'slug'])
      .sortBy('date', 'desc')
      .fetch<PostResult>()

    return { posts }
  },
  head() {
    return {
      title: 'Blog - yetti.io',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog posts on yetti.io',
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Blog - yetti.io',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Blog posts on yetti.io',
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Blog - yetti.io',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Blog posts on yetti.io',
        },
      ],
    }
  },
})
</script>
