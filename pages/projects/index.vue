<template>
  <div class="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          Projects
        </h2>
        <div class="mt-3 sm:mt-4 lg:items-center">
          <p class="text-xl text-gray-500">
            Personal and open source projects.
          </p>
        </div>
      </div>
      <project-list :projects="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectList from '@/components/ProjectList.vue'
import { ProjectResult } from '@/types/types'

export default Vue.extend({
  components: {
    ProjectList,
  },
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['title', 'categories', 'icon', 'url', 'description', 'slug'])
      .sortBy('title', 'asc')
      .fetch<ProjectResult>()

    return { projects }
  },
  head() {
    return {
      title: 'Projects - yetti.io',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Index of projects on yetti.io',
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects - yetti.io',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Index of projects on yetti.io',
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Projects - yetti.io',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Index of projects on yetti.io',
        },
      ],
    }
  },
})
</script>
