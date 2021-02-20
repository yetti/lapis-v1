<template>
  <div>
    <a :href="project.url">
      <div
        class="flex items-center justify-center h-12 w-12 rounded-md text-white project-icon"
      >
        <!-- Heroicon name: outline/globe-alt -->
        <span
          class="iconify h-6 w-6"
          :data-icon="project.icon"
          data-inline="false"
        ></span>
      </div>
      <div class="mt-5">
        <dt class="text-lg leading-6 font-medium text-gray-900">
          {{ project.title }}

          <span
            v-for="category of project.categories"
            :key="category"
            class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
            :class="category"
          >
            {{ category }}
          </span>
        </dt>
        <dd class="mt-2 text-base text-gray-500">
          {{ project.description }}
        </dd>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    project: {
      type: Object,
      default: undefined,
    },
  },
})
</script>

<style scoped>
.vuejs {
  @apply bg-green-100 text-green-800;
}

.ruby {
  @apply bg-red-100 text-red-800;
}

a {
  @apply mt-2 block border-transparent hover:border-transparent;
}

a:link .project-icon {
  @apply bg-gray-300;
}

a:hover .project-icon {
  @apply bg-blue-500;
}
</style>
