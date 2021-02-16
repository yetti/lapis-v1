<template>
  <NuxtLink :to="{ name: 'notes-slug', params: { slug: note.slug } }">
    <div class="text-sm opacity-50 post-date">{{ note.date }}</div>
    <article>{{ note.title }}</article>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    note: {
      type: Object,
      default: undefined,
    },
  },
})
</script>
