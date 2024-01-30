import {
  DefaultUnit,
  TaxDescription,
  UnitContentCE,
  type ProductAPIData,
} from "../data/productAPIData";

function mockProductID(): number {
  return Math.floor(Math.random() * 10000);
}

function getRandomPrice(): number {
  return Number((Math.random() * 4).toFixed(2));
}

function mockProduct(): ProductAPIData {
  const productID = mockProductID();

  return {
    ProductID: productID,
    Number: "",
    MainDescription: "Dit is een lange naam voor een koekje, pannekoek",
    SubDescription: null,
    CommercialContent: "",
    CommodityLawName: "",
    MinimumAge: null,
    Durability: 0,
    ScaleIndicator: false,
    WeightArticle: false,
    TaxID: 0,
    OwnBrand: false,
    TemporaryNotAvailable: false,
    ProductOnline: false,
    ContentCE: 0,
    CodeContentCE: 0,
    UnitContentCE: UnitContentCE.Gr,
    Biological: false,
    Brand: null,
    ProductOffers: [],
    ProductDeclarations: [],
    ProductBarcodes: [],
    Tax: { TaxID: 0, Description: TaxDescription.The9, Percentage: 9 },
    BrandInfo: null,
    ProductPictures: [{ Url: "https://picsum.photos/300", IsPrimary: true }],
    ProductPrices: [
      {
        PriceID: 0,
        StoreID: 0,
        ProductID: productID,
        Price: getRandomPrice(),
        RegularPrice: 10.0,
        PricePerDefaultUnit: 0,
        PricePerKilo: null,
        DefaultUnit: DefaultUnit.The1Kg,
        IsActionPrice: false,
        TaxID: 0,
        StartDate: new Date(),
        EndDate: new Date(),
        PriceLineCode: 0,
      },
    ],
    Logos: [],
    WebSubGroups: [],
    Nutrition: [],
    SubGroup: {
      SubGroupID: 0,
      ExcludeFromPaas: true,
      Description: "temp",
      Hoofdgroepen: null,
    },
    IsSingleUsePlastic: false,
  };
}

export function mockAPIData(): ProductAPIData[] {
  return [
    mockProduct(),
    mockProduct(),
    mockProduct(),
    mockProduct(),
    mockProduct(),
    mockProduct(),
    mockProduct(),
    mockProduct(),
  ];
}
