import { defineStore } from "pinia";

export const useMyFiltersStore = defineStore("filtersStore", {
  state: () => ({
    brands: new Map<string, boolean>(),
    webSubGroups: new Map<string, boolean>(),
    productOffers: new Map<string, boolean>(),
  }),
  getters: {
    areFiltersActive(): boolean {
      return [
        this.areBrandFiltersActive,
        this.areWebSubGroupFiltersActive,
        this.areProductOfferFiltersActive,
      ].includes(true);
    },
    areBrandFiltersActive(): boolean {
      return Array.from(this.brands.values()).includes(true);
    },
    areWebSubGroupFiltersActive(): boolean {
      return Array.from(this.webSubGroups.values()).includes(true);
    },
    areProductOfferFiltersActive(): boolean {
      return Array.from(this.productOffers.values()).includes(true);
    },

    getBrands(): string[] {
      return Array.from(this.brands.keys());
    },
    getWebSubGroups(): string[] {
      return Array.from(this.webSubGroups.keys());
    },
    getProductOffers(): string[] {
      return Array.from(this.productOffers.keys());
    },

    getActiveBrandFilters(): string[] {
      return getActiveFilters(this.brands);
    },
    getActiveWebSubFilters(): string[] {
      return getActiveFilters(this.webSubGroups);
    },
    getActiveOffersFilters(): string[] {
      return getActiveFilters(this.productOffers);
    },
  },
  actions: {
    setBrands(brand: string, active: boolean = false) {
      this.brands.set(brand, active);
    },
    setWebSubGroups(subGroup: string, active: boolean = false) {
      this.webSubGroups.set(subGroup, active);
    },
    setProductOFfers(productOffer: string, active: boolean = false) {
      this.productOffers.set(productOffer, active);
    },
  },
});

function getActiveFilters(filterMap: Map<string, boolean>): string[] {
  const filterNameArray: string[] = [];

  filterMap.forEach((filterStatus, filterName) => {
    if (filterStatus === true) filterNameArray.push(filterName);
  });

  return filterNameArray;
}
