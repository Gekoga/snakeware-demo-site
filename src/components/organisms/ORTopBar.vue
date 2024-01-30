<script lang="ts" setup>
import ORFilterGroup from "~/src/components/organisms/ORFilterGroup.vue";
import MOSortingDropdown from "../molecules/MOSortingDropdown.vue";
import MOShoppingCart from "../molecules/MOShoppingCart.vue";

defineProps({
  pageTitle: {
    type: String,
  },
});
</script>

<template>
  <section class="top-bar">
    <h1>{{ pageTitle }}</h1>
    <MOShoppingCart />
    <ORFilterGroup />
    <MOSortingDropdown />
  </section>
</template>

<style scoped lang="scss">
.top-bar {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;

  align-items: center;
}
</style>
