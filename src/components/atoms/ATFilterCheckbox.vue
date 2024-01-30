<script lang="ts" setup>
import ATStateLayer from "./ATStateLayer.vue";

const props = defineProps({
  filterName: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

function toggleFilter() {
  if (props.checked) emits("onToggleFilter", props.filterName, false);
  else emits("onToggleFilter", props.filterName, true);
}

const emits = defineEmits<{
  onToggleFilter: [filterName: string, filterStatus: boolean];
}>();
</script>

<template>
  <section class="checkbox">
    <label class="container">
      <input
        :name="filterName"
        type="checkbox"
        :checked="checked"
        @input="toggleFilter"
      />
      {{ filterName }}
    </label>
    <ATStateLayer @click="toggleFilter" />
  </section>
</template>

<style scoped lang="scss">
input {
  margin-inline-end: 8px;
}

.checkbox {
  z-index: $dropdown;
  display: grid;
  grid-template-columns: auto;
}

.container {
  grid-area: 1/1;
  background-color: Colors.$on-primary-fixed-dim;
  padding: 4px;
}
</style>
