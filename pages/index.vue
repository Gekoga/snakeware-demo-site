<script lang="ts" setup>
import { ref } from "vue";
import { ProductFilter } from "~/src/utils/productFilter";
import { ProductSorter } from "~/src/utils/productSorter";
import ORProductCard from "~/src/components/organisms/ORProductCard.vue";
import ORTopBar from "~/src/components/organisms/ORTopBar.vue";

const pageTitle = ref("Product overzicht");

const productFilter = new ProductFilter();
const productSorter = new ProductSorter();

const filteredProducts = computed(() => {
  return productSorter.getSortedProducts(productFilter.getFilteredProducts());
});
</script>

<template>
  <Head>
    <Title> {{ pageTitle }} </Title>
  </Head>
  <Body>
    <ORTopBar :page-title="pageTitle" />
    <hr size="4" noshade />
    <section class="product-overview">
      <section class="product-grid" v-if="filteredProducts.length > 0">
        <ORProductCard
          v-for="product of filteredProducts"
          :key="product.productID"
          :product="product"
        />
      </section>
      <section class="no-product-info" v-else>
        <h1>Er zijn geen producten gevonden die voldoen aan de filters</h1>
      </section>
    </section>
  </Body>
</template>

<style scoped lang="scss">
hr {
  width: 100%;
  background-color: Colors.$primary-container;
  margin: 16px 0;
  border: none;
}

.product-grid {
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;

  gap: 1rem;
}

.no-product-info {
  text-align: center;
}
</style>
