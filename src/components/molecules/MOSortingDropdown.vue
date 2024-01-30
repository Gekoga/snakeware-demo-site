<script lang="ts" setup>
import { useMySortingStore } from "~/src/stores/sortingStore";
import ATButton from "../atoms/ATButton.vue";
import ATSortingRadio from "../atoms/ATSortingRadio.vue";

const show = ref(false);
defineProps({
  filterGroupName: {
    type: String,
    default: "dropdown",
  },
  filterArray: {
    type: Array<string>,
    default: [],
  },
});

const sortingStore = useMySortingStore();

function changeSortingMethod(index: number) {
  sortingStore.setCurrentMethod(index);
}

function showDropdown() {
  show.value = true;
}

function hideDropdown() {
  show.value = false;
}

function toggleDropdown() {
  if (show.value == true) hideDropdown();
  else if (show.value == false) showDropdown();
}
</script>

<template>
  <section
    class="dropdown"
    @mouseenter="showDropdown"
    @mouseleave="hideDropdown"
  >
    <ATButton button-type="block" @on-click-button="toggleDropdown">
      <template #text> Sorteer </template>
    </ATButton>
    <div
      class="dropdown-content"
      :class="{ 'down-animation': show }"
      v-show="show"
    >
      <ATSortingRadio
        v-for="(sortingOption, index) of sortingStore.methods"
        radio-name="testing"
        :radio-value="sortingOption"
        :checked="sortingStore.getCurrentMethodIndex === index"
        @on-input="changeSortingMethod(index)"
      ></ATSortingRadio>
    </div>
  </section>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  overflow: auto;
  min-width: 180px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  right: 0;

  z-index: $dropdown;
}

.down-animation {
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
