<script lang="ts" setup>
import { useMyFiltersStore } from "~/src/stores/filtersStore";
import MOFilterDropdown from "../molecules/MOFilterDropdown.vue";

const filterStore = useMyFiltersStore();
function filterBrands(filterName: string, filterStatus: boolean) {
  filterStore.setBrands(filterName, filterStatus);
}

function filterWebSubGroups(filterName: string, filterStatus: boolean) {
  filterStore.setWebSubGroups(filterName, filterStatus);
}

function filterProductOffers(filtername: string, filterStatus: boolean) {
  filterStore.setProductOFfers(filtername, filterStatus);
}
</script>

<template>
  <section class="product-filters">
    <MOFilterDropdown
      @on-click-filter="filterBrands"
      filter-group-name="Merken"
      :filter-map="filterStore.brands"
    >
    </MOFilterDropdown>
    <MOFilterDropdown
      @on-click-filter="filterWebSubGroups"
      filter-group-name="Web sub groepen"
      :filter-map="filterStore.webSubGroups"
    >
    </MOFilterDropdown>
    <MOFilterDropdown
      @on-click-filter="filterProductOffers"
      filter-group-name="Product offers"
      :filter-map="filterStore.productOffers"
    >
    </MOFilterDropdown>
  </section>
</template>
