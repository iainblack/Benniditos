import { groq } from "next-sanity";

export const southHillMenuQuery = groq`*[_type == "southHillMenu"][0]{
  pizza{
    description1,
    description2,
    traditionalPizzas,
    specialtyPizzas,
    bySlice
  },
  toppings,
  starters,
  salads,
  sandwiches,
  calzones,
  pasta,
  desserts,
  soda
}`;

export const brewPubMenuQuery = groq`*[_type == "brewPubMenu"][0]{
  pizza{
    description1,
    description2,
    traditionalPizzas,
    specialtyPizzas
  },
  toppings,
  starters,
  salads,
  sandwiches,
  desserts,
  soda
}`;

export const tapListQuery = groq`*[_type == "tapList"][0]{
  prices,
  beers,
  rotation
}`;
