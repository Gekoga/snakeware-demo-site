<script lang="ts" setup>
import { ref } from "vue";
import { useMyProductStore } from "~/src/stores/productStore";
import MOShoppingCart from "~/src/components/molecules/MOShoppingCart.vue";
import MOQuantityController from "~/src/components/molecules/MOQuantityController.vue";
import ATButton from "@/src/components/atoms/ATButton.vue";

definePageMeta({
  validate: async (route) => {
    return !isNaN(Number(route.params.id));
  },
});

const route = useRoute();
const productID = Number(route.params.id);

const productStore = useMyProductStore();
const product = productStore.getProduct(productID);

const pageTitle = ref(product.mainDescription);
</script>

<template>
  <Head>
    <Title>
      {{ pageTitle }}
    </Title>
  </Head>
  <Body>
    <section>
      <ATButton button-type="filled" @on-click-button="$router.back()">
        <template #icon> &lt; </template>
        <template #text> Terug </template>
      </ATButton>
      <section class="title-area">
        <h1>{{ product.mainDescription }}</h1>
        <MOShoppingCart />
      </section>
      <h3>{{ product.subDescription }}</h3>
      <img :src="product.pictureURL" />
      <section class="text-area">
        <p>Price: €{{ product.price }}</p>
      </section>
      <MOQuantityController
        :product-id="product.productID"
      ></MOQuantityController>
    </section>
  </Body>
</template>

<style scoped lang="scss">
img {
  max-width: 30vw;
  min-width: 250px;
}

.title-area {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>
