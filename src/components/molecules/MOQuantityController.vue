<script lang="ts" setup>
import { useMyBasketStore } from "~/src/stores/basketStore";
import ATButton from "../atoms/ATButton.vue";

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});

const basketStore = useMyBasketStore();
const count = ref(
  basketStore.getAmountOfSingleProductInBasket(props.productId)
);

function increaseCounter() {
  count.value++;
  basketStore.addProductToBasket(props.productId);
}

function decreaseCounter() {
  if (count.value <= 0) return;

  count.value--;
  basketStore.removeProductFromBasket(props.productId);
}
</script>
<template>
  <section class="quantity-counter">
    <ATButton button-type="outlined" @on-click-button="decreaseCounter">
      <template #icon> - </template>
    </ATButton>
    {{ count }}
    <ATButton button-type="outlined" @on-click-button="increaseCounter">
      <template #icon> + </template>
    </ATButton>
  </section>
</template>

<style scoped lang="scss">
.quantity-counter {
  margin: 8px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  justify-items: center;
  align-items: center;
}
</style>
