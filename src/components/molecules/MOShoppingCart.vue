<script lang="ts" setup>
import { useMyBasketStore } from "~/src/stores/basketStore";

const basketStore = useMyBasketStore();
</script>

<template>
  <section class="shopping-cart">
    {{ basketStore.getAmountInBasket }}
  </section>
</template>

<style scoped lang="scss">
.shopping-cart {
  height: 32px;
  width: 32px;

  background-color: Colors.$primary;
  color: Colors.$on-primary;

  justify-self: end;

  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
