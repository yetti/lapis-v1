<template>
  <div>
    <p class="text-sm text-gray-500">
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <span
        v-for="category of post.categories"
        :key="category"
        class="
          ml-2
          inline-flex
          items-center
          px-3
          py-0.5
          rounded-full
          text-sm
          font-medium
        "
        :class="category"
      >
        {{ category }}
      </span>
    </p>
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: post.slug } }"
      class="index-list-item"
    >
      <p class="text-xl font-semibold text-gray-900">
        {{ post.title }}
      </p>
      <p class="mt-3 text-base text-gray-500 line-clamp-3">
        {{ post.description }}
      </p>
    </NuxtLink>
    <div class="mt-3">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="font-semibold"
        >Read full story</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PostResult } from '~/types/types'

export default Vue.extend({
  name: 'PostListItem',
  props: {
    post: {
      type: Object as () => PostResult,
      default: undefined,
    },
  },
  methods: {
    formatDate(date: Date) {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleString('en', options)
    },
  },
})
</script>

<style scoped>
.this {
  @apply bg-pink-100 text-pink-800;
}

.article {
  @apply bg-indigo-100 text-indigo-800;
}

.note {
  @apply bg-green-100 text-green-800;
}
</style>
