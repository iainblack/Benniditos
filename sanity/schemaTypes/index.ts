import {
  basicOptionsType,
  sandwichOptionsType,
  beerItemType,
  priceItemType,
  toppingsType,
  starterItemType,
  calzoneItemType,
  dessertItemType,
  sandwichSectionType,
  pastaSectionType,
  sodaSectionType,
  saladsSectionType,
  dessertsSectionType,
  startersSectionType,
  pizzaColumnType,
  pizzaBySliceType,
} from "./objects";

import { southHillMenuType, brewPubMenuType, tapListType } from "./documents";

export const schemaTypes = [
  // Documents (singletons)
  southHillMenuType,
  brewPubMenuType,
  tapListType,
  // Objects
  basicOptionsType,
  sandwichOptionsType,
  beerItemType,
  priceItemType,
  toppingsType,
  starterItemType,
  calzoneItemType,
  dessertItemType,
  sandwichSectionType,
  pastaSectionType,
  sodaSectionType,
  saladsSectionType,
  dessertsSectionType,
  startersSectionType,
  pizzaColumnType,
  pizzaBySliceType,
];
