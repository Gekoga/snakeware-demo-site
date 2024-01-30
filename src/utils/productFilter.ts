import type UsableProductData from "../data/usableProductData";
import { useMyFiltersStore } from "../stores/filtersStore";
import { useMyProductStore } from "../stores/productStore";

export class ProductFilter {
  private productStore = useMyProductStore();
  private filterStore = useMyFiltersStore();

  public getFilteredProducts(): UsableProductData[] {
    const allProducts = Array.from(this.productStore.getAllProducts.values());

    if (this.filterStore.areFiltersActive === false) return allProducts;

    return this.filterOnBrands(
      this.filterOnWebSubGroup(this.filterOnProductOffers(allProducts))
    );
  }

  private filterOnBrands(
    productsArray: UsableProductData[]
  ): UsableProductData[] {
    if (this.filterStore.areBrandFiltersActive === false) return productsArray;

    return productsArray.filter((product) => {
      return this.filterStore.getActiveBrandFilters.every((filter) => {
        return product.brand.includes(filter);
      });
    });
  }

  private filterOnWebSubGroup(
    productsArray: UsableProductData[]
  ): UsableProductData[] {
    if (this.filterStore.areWebSubGroupFiltersActive === false)
      return productsArray;

    return productsArray.filter((product) => {
      return this.filterStore.getActiveWebSubFilters.every((filter) => {
        return product.webSubGroups.includes(filter);
      });
    });
  }

  private filterOnProductOffers(
    productsArray: UsableProductData[]
  ): UsableProductData[] {
    if (this.filterStore.areProductOfferFiltersActive === false)
      return productsArray;

    return productsArray.filter((product) => {
      return this.filterStore.getActiveOffersFilters.every((filter) => {
        return product.productOffers.includes(filter);
      });
    });
  }
}
