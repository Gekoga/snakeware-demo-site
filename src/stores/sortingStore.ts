import { defineStore } from "pinia";

export const useMySortingStore = defineStore("sortingStore", {
  state: () => ({
    methods: ["Aanbevolen", "Laag naar Hoog", "Hoog naar Laag"],
    currentMethod: "Aanbevolen",
  }),
  getters: {
    getCurrentMethod(): string {
      return this.currentMethod;
    },
    getCurrentMethodIndex(): number {
      return this.methods.indexOf(this.currentMethod);
    },
  },
  actions: {
    setCurrentMethod(index: number) {
      this.currentMethod = this.methods[index];
    },
  },
});
