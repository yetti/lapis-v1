<template>
  <article class="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <img alt="avatar" src="~/assets/img/avatar.png" class="avatar" />

    <h2>👋 Hi, I'm Yetrina</h2>

    <p>
      I'm a fullstack developer who enjoys playing and collecting board games.
    </p>

    <p>
      In my 15+ years in IT, I've mostly developed enterprise web applications
      using Java and Spring. I've also maintained a few Ruby on Rails
      applications along the way. Currently I'm improving my front-end skills by
      learning Vue.js and Node.js.
    </p>
    <p>
      Away from the keyboard, I enjoy playing board games and video games,
      painting miniatures and gardening. My "shelf of shame" (unplayed board
      games) is growing slowly but steadily.
    </p>
    <hr />
    <p>
      You can also find me on <a href="https://github.com/yetti">Github</a> and
      <a href="https://twitter.com/yettibot">twitter</a>.
    </p>
  </article>
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
