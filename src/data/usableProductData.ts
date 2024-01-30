export default class UsableProductData {
  public readonly productID: number;
  public readonly mainDescription: string;
  public readonly subDescription: string;
  public readonly brand: string;
  public readonly productOffers: string[];
  public readonly pictureURL: string;
  public readonly price: number;
  public readonly webSubGroups: string[];

  constructor(
    productID: number,
    mainDescription: string,
    subDescription: string,
    brand: string,
    productOffers: string[],
    productPictures: string,
    productPrices: number,
    webSubGroups: string[]
  ) {
    this.productID = productID;
    this.mainDescription = mainDescription;
    this.subDescription = subDescription;
    this.brand = brand;
    this.productOffers = productOffers;
    this.pictureURL = productPictures;
    this.price = productPrices;
    this.webSubGroups = webSubGroups;
  }
}
