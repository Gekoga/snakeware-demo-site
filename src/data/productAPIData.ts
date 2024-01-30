// Verzameld van Nuxt devtools -> Data

export interface ProductAPIData {
  ProductID: number;
  Number: string;
  MainDescription: string;
  SubDescription: null | string;
  CommercialContent: string;
  CommodityLawName: string;
  MinimumAge: number | null;
  Durability: number;
  ScaleIndicator: boolean;
  WeightArticle: boolean;
  TaxID: number;
  OwnBrand: boolean;
  TemporaryNotAvailable: boolean;
  ProductOnline: boolean;
  ContentCE: number;
  CodeContentCE: number;
  UnitContentCE: UnitContentCE;
  Biological: boolean;
  Brand: null | string;
  ProductOffers: ProductOffer[];
  ProductDeclarations: ProductDeclaration[];
  ProductBarcodes: ProductBarcode[];
  Tax: Tax;
  BrandInfo: BrandInfo | null;
  ProductPictures: ProductPicture[];
  ProductPrices: ProductPrice[];
  Logos: Logo[];
  WebSubGroups: WebSubGroup[];
  Nutrition: Nutrition[];
  SubGroup: SubGroup;
  IsSingleUsePlastic: boolean;
}

export interface BrandInfo {
  BrandID: number;
  Description: string;
}

export interface Logo {
  LogoID: number;
  Description: LogoDescription;
  Url: string;
  Position: number;
  Info: null;
  IsDirk: boolean;
  IsDeka: boolean;
}

export enum LogoDescription {
  DekaVers = "DekaVers",
  GewoonTransparant = "Gewoon Transparant",
  LekkerLaag = "lekker laag",
  RainforestAlliancePN = "Rainforest Alliance P&N",
  Utz = "UTZ",
}

export interface Nutrition {
  MainValue: Value;
  SubValues: Value[];
}

export interface Value {
  NutritionID: number;
  Description: MainValueDescription;
  Text: Text;
  ReferenceIntake: null | string;
  ValueAsSold: string;
  ValueAsPortion: null | string;
  ValueWhenPrepared: null;
}

export enum MainValueDescription {
  EOV = "E.O.V",
  Ei = "Ei",
  KJ = "kJ",
  Kcal = "kcal",
  Kh = "Kh",
  MOV = "M.O.V",
  Na = "Na",
  Poly = "Poly",
  S = "S",
  TrV = "Tr.V",
  Ts = "TS",
  Tz = "TZ",
  Tz25 = "TZ25",
  VVet = "V.Vet",
  Vet = "Vet",
  Vv = "VV",
  Z = "Z",
  Zetm = "Zetm",
}

export enum Text {
  DierlijkeEiwittenG = "- dierlijke eiwitten (g)",
  EiwittenG = "Eiwitten (g)",
  EnergieKilocalorieënKcal = "Energie Kilocalorieën (kcal)",
  EnergieKilojoulesKJ = "Energie Kilojoules (kJ)",
  EnkelvoudigOnverzadigdeVetzurenG = "enkelvoudig onverzadigde vetzuren (g)",
  KoolhydratenG = "Koolhydraten (g)",
  MeervoudigOnverzadigdeVetzurenG = "meervoudig onverzadigde vetzuren (g)",
  NatriumG = "Natrium (g)",
  NatriumMg = "Natrium (mg)",
  PlantaardigeEiwittenG = "- plantaardige eiwitten (g)",
  PolyolenG = "polyolen (g)",
  SuikersG = "suikers (g)",
  ToegevoegdeSuikersG = "toegevoegde suikers (g)",
  ToegevoegdeZoutenG = "toegevoegde zouten (g)",
  TransvetzurenG = "transvetzuren (g)",
  VerzadigdeVetzurenG = "verzadigde vetzuren (g)",
  VettenG = "Vetten (g)",
  VoedingsvezelG = "Voedingsvezel (g)",
  ZetmeelG = "zetmeel (g)",
  ZoutG = "Zout (g)",
}

export interface ProductBarcode {
  Barcode: string;
}

export interface ProductDeclaration {
  ContactInformation: ContactInformation | null;
  NutritionInformation: NutritionInformation;
  StorageConditions: StorageConditions | null;
  PreparationInstructions: PreparationInstructions | null;
  ServingSugestions: null;
  ExplicitNotations: ExplicitNotations | null;
  Claims: ProductDeclarationClaims | null;
  LandOfOrigin: null;
  UsageAdvice: null;
  ProductAllergens: ProductAllergen[];
  ProductIngredients: ProductIngredient[];
}

export interface ProductDeclarationClaims {
  Claims: ClaimsClaims;
}

export interface ClaimsClaims {
  "Claim-marketing": string;
}

export interface ContactInformation {
  ContactGegevens: ContactGegevens;
}

export interface ContactGegevens {
  ContactNaam: string;
  ContactAdres: string;
  ContactKanalen?: ContactKanalen;
}

export interface ContactKanalen {
  ContactKanaal: ContactKanaalElement[] | ContactKanaalElement;
}

export interface ContactKanaalElement {
  "Communicatie-kanaal-gegevens": string;
  "Communicatie-kanaal": CommunicatieKanaal;
}

export enum CommunicatieKanaal {
  Email = "EMAIL",
  Telephone = "TELEPHONE",
  Web = "WEB",
  Website = "WEBSITE",
}

export interface ExplicitNotations {
  "Verplichte-vermeldingen": VerplichteVermeldingen;
}

export interface VerplichteVermeldingen {
  "Verplichte-vermelding": VerplichteVermelding;
}

export interface VerplichteVermelding {
  "Verplichte-vermelding-omschrijving": string;
  "Verplichte-vermelding-tekst": string;
  "Verplichte-vermelding-volgnr": string;
  "Verplichte-vermelding-code": string;
  "Verplichte-vermelding-id": string;
}

export interface NutritionInformation {
  Voedingswaarden: Voedingswaarden;
}

export interface Voedingswaarden {
  Algemeen: Algemeen;
}

export interface Algemeen {
  Standaardeenheid: Standaardeenheid;
  "Aantal-porties-per-verpakking"?: string;
  "Percentage-referentie-inname-standaard"?: string;
  Portiegrootte?: string;
}

export enum Standaardeenheid {
  Per100G = "Per 100g",
  The100G = "100g",
  The100Grm = "100 GRM",
  The100Grm100Grm = "100 GRM 100 GRM",
}

export interface PreparationInstructions {
  Bereidingsinstructies: Bereidingsinstructies;
}

export interface Bereidingsinstructies {
  Bereidingsinstructie: string;
}

export interface ProductAllergen {
  AllergenDescription: string;
  AllergenText: AllergenText;
}

export enum AllergenText {
  Bevat = "Bevat",
  KanSporenBevattenVan = "Kan sporen bevatten van",
  VrijVan = "Vrij van",
}

export interface ProductIngredient {
  Text: string;
}

export interface StorageConditions {
  Bewaaradviezen: Bewaaradviezen;
}

export interface Bewaaradviezen {
  Bewaaradvies: string;
}

export interface ProductOffer {
  OfferID: number;
  ProductID: number;
  RegularPrice: number;
  OfferPrice: number;
  IsMixMatch: boolean;
  MaxPerCustomer: null;
  Offer: Offer;
}

export interface Offer {
  OfferID: number;
  CategoryName: null;
  TasteTheDifference: boolean;
  WhileSuppliesLast: boolean;
  HeaderText: string;
  SubText: string;
  Packaging: string;
  TextPriceSign: string;
  NormalPrice: number;
  OfferPrice: number;
  StartDate: Date;
  EndDate: Date;
  DisclaimerStartDateOverride: Date;
  DisclaimerEndDateOverride: Date;
  TextPriceSign2: string;
  TotalXplusX: null;
  MixMatchDiscount: null;
  OfferUrls: OfferURL[];
  WebshopType: WebshopType;
}

export interface OfferURL {
  Url: string;
}

export interface WebshopType {
  WebshopTypeID: number;
  FormulaID: number;
  Formula: Formula;
}

export interface Formula {
  FormulaID: number;
  Description: string;
  DefaultWebshopType: number;
  ReferenceStore: number;
  ReferencePriceLine: number;
}

export interface ProductPicture {
  Url: string;
  IsPrimary: boolean;
}

export interface ProductPrice {
  PriceID: number;
  StoreID: number;
  ProductID: number;
  Price: number;
  RegularPrice: number;
  PricePerKilo: null;
  PricePerDefaultUnit: number;
  DefaultUnit: DefaultUnit;
  IsActionPrice: boolean;
  TaxID: number;
  StartDate: Date;
  EndDate: Date;
  PriceLineCode: number;
}

export enum DefaultUnit {
  The1Kg = "1 KG",
  The1St = "1 ST",
}

export interface SubGroup {
  SubGroupID: number;
  ExcludeFromPaas: boolean;
  Description: string;
  Hoofdgroepen: null;
}

export interface Tax {
  TaxID: number;
  Description: TaxDescription;
  Percentage: number;
}

export enum TaxDescription {
  The9 = "9%",
}

export enum UnitContentCE {
  Gr = "GR",
  St = "ST",
}

export interface WebSubGroup {
  WebSubGroupID: number;
  Position: number;
  Description: string;
  WebGroup: WebGroup;
}

export interface WebGroup {
  WebGroupID: number;
  Position: number;
  Description: string;
  WebDepartment: WebDepartment;
}

export interface WebDepartment {
  WebDepartmentID: number;
  Position: number;
  Description: string;
}
