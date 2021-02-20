<template>
  <div class="mt-6 py-12 bg-white">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <project-list-item
          v-for="project of projects"
          :key="project.slug"
          :project="project"
        />
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectListItem from '@/components/ProjectListItem.vue'

export default Vue.extend({
  components: {
    ProjectListItem,
  },
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
