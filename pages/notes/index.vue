<template>
  <section class="mx-auto max-w-screen-sm">
    <h1 class="section-heading">Notes</h1>
    <NoteList :notes="notes" />
  </section>
  <!-- <NoteList /> -->
</template>

<script lang="ts">
import Vue from 'vue'
import NoteList from '@/components/NoteList.vue'

export default Vue.extend({
  components: {
    NoteList,
  },
  async asyncData({ $content, params }) {
    const notes = await $content('notes', params.slug)
      .only(['title', 'date', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { notes }
  },
})
</script>
