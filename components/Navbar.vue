<template>
  <nav class="flex justify-between">
    <div class="flex flex-row justify-between">
      <div class="lowercase"><NuxtLink to="/">yetti.io</NuxtLink></div>
    </div>
    <div>
      <ul class="flex flex-row">
        <li class="pr-5">
          <NuxtLink to="/blog" class="inline-flex items-center nav-item">
            <span
              class="iconify"
              data-icon="ri:booklet-line"
              data-inline="false"
            ></span>
            <span class="sr-only">Posts</span>
          </NuxtLink>
        </li>
        <li class="pr-5">
          <NuxtLink to="/notes" class="inline-flex items-center nav-item">
            <span
              class="iconify"
              data-icon="ri:sticky-note-line"
              data-inline="false"
            ></span>
            <span class="sr-only">Notes</span>
          </NuxtLink>
        </li>
        <li class="pr-5">
          <a
            href="https://github.com/yetti"
            class="inline-flex items-center nav-item"
          >
            <span
              class="iconify"
              data-icon="ri:github-fill"
              data-inline="false"
            ></span>
            <span class="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <NuxtLink to="/" class="inline-flex items-center nav-item">
            <span
              class="iconify"
              data-icon="ri:user-line"
              data-inline="false"
            ></span>
            <span class="sr-only">About</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
