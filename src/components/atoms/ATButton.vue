<script lang="ts" setup>
import { useSlots, computed } from "vue";
import ATStateLayer from "./ATStateLayer.vue";

const props = defineProps({
  buttonType: {
    type: String,
    default: "base",
    validator(value: string) {
      return [
        "fab",
        "elevated",
        "filled",
        "tonal",
        "outlined",
        "base",
        "block",
      ].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();
const cssStylingString = computed(() => {
  var collectionString = "";
  if (slots.icon !== undefined) collectionString += "icon";

  if (slots.text !== undefined) collectionString += "text";

  return collectionString;
});

const borderRadius = computed(() => {
  if (props.buttonType === "fab") return 16 + "px";
  else if (props.buttonType === "block") return 0 + "px";
  return 20 + "px";
});

defineEmits<{
  onClickButton: [paylod: MouseEvent];
}>();
</script>

<template>
  <section>
    <button
      class="at-button"
      :disabled="disabled"
      :class="[buttonType, cssStylingString]"
      type="button"
      @click="(payload) => $emit('onClickButton', payload)"
    >
      <section class="slot-area">
        <section class="icon-container" v-if="$slots.icon">
          <slot name="icon"></slot>
        </section>
        <section class="text-container" v-if="$slots.text">
          <slot name="text"></slot>
        </section>
      </section>
      <ATStateLayer :border-radius="borderRadius" />
    </button>
    <section class="caption-container" v-if="$slots.caption">
      <slot name="caption"></slot>
    </section>
  </section>
</template>

<style scoped lang="scss">
.caption-container {
  text-align: center;
  max-width: 48px;
}

.at-button {
  z-index: $openButton;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  border: none;
  padding: 0;

  gap: 8px;
  border-radius: v-bind("borderRadius");

  font-weight: bold;

  height: 40px;
  min-width: 48px;
}

.icon .slot-area {
  border-radius: 25px;
}

.text .slot-area {
  padding: 0px 24px;
}

.icontext .slot-area {
  padding: 0px 24px 0px 16px;
}

.slot-area {
  grid-area: 1 / 1;
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: row;
  gap: 8px;
}

.block {
  background: Colors.$on-primary-fixed-dim;

  color: Colors.$primary-fixed-dim;
  fill: Colors.$primary-fixed-dim;
}

/* fab button styling */
.fab {
  height: 56px;
  min-width: 80px;
  border-radius: 16px;

  box-shadow: Elevation.$level3;

  background: Colors.$on-primary-fixed-dim;

  color: Colors.$primary-fixed-dim;
  fill: Colors.$primary-fixed-dim;
}

.fab.icon {
  min-width: 56px;
  border-radius: 16px;
}

.fab:hover {
  box-shadow: Elevation.$level4;
}

.fab:focus,
.fab:active {
  box-shadow: Elevation.$level3;
}

/* Elevated button styling */
.elevated {
  background: Colors.$on-primary;
  box-shadow: Elevation.$level1;

  color: Colors.$primary;
  fill: Colors.$primary;
}

.elevated:hover {
  box-shadow: Elevation.$level2;
}

.elevated:focus,
.elevated:active {
  box-shadow: Elevation.$level1;
}

/* Filled button styling */
.filled {
  background: Colors.$primary;
  box-shadow: Elevation.$level0;

  color: Colors.$on-primary;
  fill: Colors.$on-primary;
}

.filled:hover {
  box-shadow: Elevation.$level1;
}

.filled:focus,
.filled:active {
  box-shadow: Elevation.$level0;
}

/* Tonal button styling */
.tonal {
  box-shadow: Elevation.$level0;

  background: Colors.$primary-container;

  color: Colors.$on-primary-container;
  fill: Colors.$on-primary-container;
}

.tonal:hover {
  box-shadow: Elevation.$level1;
}

.tonal:focus,
.tonal:active {
  box-shadow: Elevation.$level0;
}

/* Outlined button styling */
.outlined {
  background: transparent;
  box-shadow: Elevation.$level0;

  border: 1px solid Colors.$primary;

  color: Colors.$primary;
  fill: Colors.$primary;
}

.outlined:focus {
  border: 1px solid Colors.$primary;
}

.outlined:active {
  border: 1px solid Colors.$primary;
}

/* Base button styling */
.base {
  background: transparent;
  box-shadow: Elevation.$level0;

  color: Colors.$primary;
  fill: Colors.$primary;
}

.at-button:disabled {
  background: rgba(
    $color: rgb(64, 65, 71),
    $alpha: Elevation.$state-opacity-focus
  );
  box-shadow: Elevation.$level0;

  color: rgba(
    $color: rgb(64, 65, 71),
    $alpha: Elevation.$state-opacity-disabled
  );
  fill: rgba(
    $color: rgb(64, 65, 71),
    $alpha: Elevation.$state-opacity-disabled
  );
}

.base:disabled {
  background: transparent;
}
</style>
