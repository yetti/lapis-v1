<template>
  <ul class="list-none">
    <li v-for="note of notes" :key="note.slug" class="post-link">
      <NoteListItem :note="note" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import NoteListItem from '@/components/NoteListItem.vue'

export default Vue.extend({
  components: {
    NoteListItem,
  },
  props: {
    notes: {
      type: Array,
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
