<script setup lang="ts">
import { APIProductDataGatherer } from "./src/utils/APIProductDataGatherer";

const siteName = "Snakeware opdracht";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${siteName}` : `${siteName}`;
  },
});

// https://nuxt.com/docs/getting-started/data-fetching#usefetch
new APIProductDataGatherer().getAPIResonse();
</script>

<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
.app {
  max-width: 1200px;
  width: 80vw;

  justify-self: center;
}
</style>
