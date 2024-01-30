<script lang="ts" setup>
import ATStateLayer from "./ATStateLayer.vue";

defineProps({
  radioName: {
    type: String,
    required: true,
  },
  radioValue: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

defineEmits<{
  onInput: void[];
}>();
</script>

<template>
  <section class="radio">
    <label class="container">
      <input
        type="radio"
        :value="radioValue"
        :id="radioValue"
        :name="radioName"
        :checked="checked"
        @input="$emit('onInput')"
      />
      {{ radioValue }}
    </label>
    <ATStateLayer @click="$emit('onInput')" />
  </section>
</template>

<style scoped lang="scss">
input {
  margin-inline-end: 8px;
}

.radio {
  z-index: $dropdown;
  display: grid;
  grid-template-columns: auto;
}
.container {
  grid-area: 1/1;
  background-color: Colors.$on-primary-fixed-dim;
  padding: 4px;

  right: 0;
}
</style>
