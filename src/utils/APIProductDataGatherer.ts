import type { ProductAPIData } from "../data/productAPIData";
import UsableProductData from "../data/usableProductData";
import { useMyFiltersStore } from "../stores/filtersStore";
import { useMyProductStore } from "../stores/productStore";
import { mockAPIData } from "./mockFunctions";

export class APIProductDataGatherer {
  private runtimeConfig = useRuntimeConfig();

  public async getAPIResonse() {
    try {
      const url: string = `${this.runtimeConfig.public.apiBase}?api_key=${this.runtimeConfig.public.apiSecret}`;
      const apiResponse = await fetch(url);
      const apiData = (await apiResponse.json()) as ProductAPIData[];

      const productData = this.convertAPIDataToCustomProductClass(apiData);
      this.storeProductDataInProductStore(productData);
    } catch (error) {
      console.error(error);
      throw new Error("Error API Response");
    }
  }

  public async getMockAPIResponse() {
    try {
      await new Promise((r) => setTimeout(r, 1000));
      const mockedData = mockAPIData();

      const productData = this.convertAPIDataToCustomProductClass(mockedData);
      this.storeProductDataInProductStore(productData);
    } catch (error) {
      console.error(error);
      throw new Error("Error Mock API Response");
    }
  }

  private convertAPIDataToCustomProductClass(
    apiResponse: ProductAPIData[]
  ): UsableProductData[] {
    const productData: UsableProductData[] = [];

    apiResponse.forEach((product) => {
      const subDescription = product.SubDescription
        ? product.SubDescription
        : "";
      const brand = product.Brand ? product.Brand : "";
      const pictureURL = product.ProductPictures[0].Url;
      const price = product.ProductPrices[0].Price;

      const webSubGroups: string[] = [];

      product.WebSubGroups.forEach((webSubGroup) => {
        webSubGroups.push(webSubGroup.Description);
        webSubGroups.push(webSubGroup.WebGroup.Description);
        webSubGroups.push(webSubGroup.WebGroup.WebDepartment.Description);
      });

      const productOffers: string[] = [];
      product.ProductOffers.forEach((productOffer) => {
        productOffers.push(productOffer.Offer.HeaderText);
      });

      productData.push(
        new UsableProductData(
          product.ProductID,
          product.MainDescription,
          subDescription,
          brand,
          productOffers,
          pictureURL,
          price,
          webSubGroups
        )
      );

      this.storeFiltersInFilterStore(brand, webSubGroups, productOffers);
    });

    return productData;
  }

  private storeFiltersInFilterStore(
    brand: string,
    webSubGroup: string[],
    productOffers: string[]
  ) {
    const filtersStore = useMyFiltersStore();

    if (brand !== "") filtersStore.setBrands(brand);
    webSubGroup.forEach((webSubGroup) => {
      filtersStore.setWebSubGroups(webSubGroup);
    });

    productOffers.forEach((productOffer) => {
      filtersStore.setProductOFfers(productOffer);
    });
  }

  private storeProductDataInProductStore(productData: UsableProductData[]) {
    const productStore = useMyProductStore();
    productStore.setProducts(productData);
  }
}
