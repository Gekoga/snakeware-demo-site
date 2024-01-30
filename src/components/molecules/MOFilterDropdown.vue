<script lang="ts" setup>
import ATButton from "../atoms/ATButton.vue";
import ATFilterCheckbox from "../atoms/ATFilterCheckbox.vue";

const show = ref(false);
defineProps({
  filterGroupName: {
    type: String,
    default: "dropdown",
  },
  filterMap: {
    type: Map<string, boolean>,
    default: new Map<string, boolean>(),
  },
});

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

function toggleFilter(filterName: string, filterStatus: boolean) {
  emits("onClickFilter", filterName, filterStatus);
}

const emits = defineEmits<{
  onClickFilter: [filterName: string, filterStatus: boolean];
}>();
</script>

<template>
  <section
    class="dropdown"
    @mouseenter="showDropdown"
    @mouseleave="hideDropdown"
  >
    <ATButton button-type="block" @on-click-button="toggleDropdown">
      <template #text>
        {{ filterGroupName }}
      </template>
    </ATButton>
    <div
      class="dropdown-content"
      :class="{ 'down-animation': show }"
      v-show="show"
    >
      <ATFilterCheckbox
        :filter-name="filterName"
        v-for="[filterName, filterStatus] in filterMap.entries()"
        :checked="filterStatus"
        @on-toggle-filter="toggleFilter"
      >
      </ATFilterCheckbox>
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
