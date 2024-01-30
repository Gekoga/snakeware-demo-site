<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  borderRadius: {
    type: String,
    default: "0px",
  },
});
</script>

<template>
  <section class="state-layer"></section>
</template>

<style scoped lang="scss">
.state-layer {
  grid-area: 1 / 1;
  z-index: inherit;

  height: 100%;
  width: 100%;

  border-radius: v-bind("$props.borderRadius");
}

.state-layer:hover {
  background-color: rgba($color: black, $alpha: Elevation.$state-opacity-hover);
}

.state-layer:active {
  background-color: rgba($color: black, $alpha: Elevation.$state-opacity-press);
}

.state-layer:focus {
  background-color: rgba($color: black, $alpha: Elevation.$state-opacity-press);
}
</style>
