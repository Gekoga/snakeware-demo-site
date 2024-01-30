import { defineStore } from "pinia";

export const useMyBasketStore = defineStore("basketStore", {
  state: () => ({ productBasket: new Map<number, number>() }),
  getters: {
    getBasketLength(): number {
      return this.productBasket.size;
    },
    getAmountInBasket(): number {
      let amount = 0;

      this.productBasket.forEach((value) => {
        amount += value;
      });

      return amount;
    },
  },
  actions: {
    addProductToBasket(productID: number) {
      if (this.productBasket.has(productID)) {
        this.productBasket.set(
          productID,
          this.productBasket.get(productID)!.valueOf() + 1
        );
      } else {
        this.productBasket.set(productID, 1);
      }
    },
    removeProductFromBasket(productID: number) {
      if (this.productBasket.has(productID) === false) return;

      const timesProductIsInBasket = this.productBasket
        .get(productID)!
        .valueOf();

      if (timesProductIsInBasket <= 1) this.productBasket.delete(productID);
      else this.productBasket.set(productID, timesProductIsInBasket - 1);
    },
    getAmountOfSingleProductInBasket(productID: number): number {
      return this.productBasket.has(productID) ? this.productBasket.get(productID)! : 0;
    }
  },
});
