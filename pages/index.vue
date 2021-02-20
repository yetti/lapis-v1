<template>
  <div class="text-left">
    <h1
      class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
    >
      <span class="block xl:inline">👋 Hi, I'm Yetrina</span>
    </h1>
    <div
      class="text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      <h2
        class="mt-2 text-xl tracking-tight font-extrabold text-gray-600 sm:text-2xl md:text-3xl"
      >
        I'm a fullstack developer<br />who enjoys playing and collecting board
        games.
      </h2>
      <p
        class="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        In my career I've mostly worked in the Australian Public Service,
        developing web applications to assist Australians in hardship or improve
        access to historical and cultural resources.
      </p>
      <p
        class="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        Away from the keyboard, I enjoy playing board games and video games,
        painting minatures and aquascaping. My "shelf of shame" (unplayed board
        games) is growing slowly and steadily.
      </p>
      <p
        class="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        You can also find me on
        <a href="https://github.com/yetti" title="@yetti on GitHub" class="font-medium hover:text-gray-700">GitHub</a>
        and
        <a href="https://twitter.com/yettibot" title="@yettibot on Twitter" class="font-medium hover:text-gray-700"
          >Twitter</a
        >.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.avatar {
  overflow: hidden;
  border-radius: 4em;
  border-width: 4px;
  @apply border-blue-400;
  height: 8em;
  width: 8em;
  margin-top: 3em;
  pointer-events: none;
  user-select: none;
}
</style>
