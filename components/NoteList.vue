<template>
  <ul>
    <li v-for="note of notes" :key="note.slug" class="note prose prose-sm">
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
