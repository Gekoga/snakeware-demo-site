import { defineStore } from "pinia";
import UsableProductData from "../data/usableProductData";

export const useMyProductStore = defineStore("productStore", {
  state: () => ({ products: new Map<number, UsableProductData>() }),
  getters: {
    getAllProducts(): Map<number, UsableProductData> {
      return this.products;
    },
    getAmountOfProducts(): number {
      return this.products.size;
    },
  },
  actions: {
    setProducts(products: UsableProductData[]) {
      products.forEach((product) => {
        this.products.set(product.productID, product);
      });
    },
    addProduct(product: UsableProductData) {
      this.products.set(product.productID, product);
    },
    getProduct(productID: number): UsableProductData {
      return this.products.get(productID) as UsableProductData;
    },
  },
});
