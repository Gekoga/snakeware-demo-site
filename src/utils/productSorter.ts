import type UsableProductData from "../data/usableProductData";
import { useMySortingStore } from "../stores/sortingStore";

export class ProductSorter {
  private sortingStore = useMySortingStore();

  public getSortedProducts(
    productData: UsableProductData[]
  ): UsableProductData[] {
    if (this.sortingStore.getCurrentMethodIndex <= 0) return productData;

    if (this.sortingStore.getCurrentMethodIndex === 1)
      return this.sortLowToHigh(productData);

    return this.sortHighToLow(productData);
  }

  private sortLowToHigh(productData: UsableProductData[]): UsableProductData[] {
    productData.sort(function (a, b) {
      return a.price - b.price;
    });

    return productData;
  }

  private sortHighToLow(productData: UsableProductData[]): UsableProductData[] {
    return this.sortLowToHigh(productData).reverse();
  }
}
