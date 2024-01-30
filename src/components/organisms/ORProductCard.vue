<script lang="ts" setup>
import type { PropType } from "vue";
import ATStateLayer from "../atoms/ATStateLayer.vue";

import MOQuantityController from "../molecules/MOQuantityController.vue";
import type UsableProductData from "~/src/data/usableProductData";

const props = defineProps({
  product: {
    type: Object as PropType<UsableProductData>,
    required: true,
  },
});

function routeToClickedCard() {
  navigateTo({ path: `/productPage/${props.product.productID}` });
}

const borderRadius = ref("8px");
</script>

<template>
  <section class="card">
    <section class="product-card">
      <img :src="props.product.pictureURL" />
      <section class="text-area">
        <h3>{{ props.product.mainDescription }}</h3>
        <p>Product ID: {{ props.product.productID }}</p>
        <p>Prijs: €{{ props.product.price }}</p>
      </section>
    </section>
    <ATStateLayer :border-radius="borderRadius" @click="routeToClickedCard()" />
    <MOQuantityController :product-id="props.product.productID" />
  </section>
</template>

<style scoped lang="scss">
img {
  max-width: 250px;
  max-height: 250px;
  border-radius: 8px;
  background-color: Colors.$on-primary;
}

.card {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
}

.product-card {
  grid-area: 1 / 1;
  width: 250px;

  display: grid;
  grid-template-columns: auto;
  gap: 16px;

  border-radius: v-bind(borderRadius);
  background-color: Colors.$primary;
  color: Colors.$on-primary;
}

.text-area {
  margin: 0px 8px;
}

.text-area h3 {
  margin: 0;
}
</style>
