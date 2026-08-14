import { defineField, defineType } from "sanity";

export const tapListType = defineType({
  name: "tapList",
  title: "Tap List",
  type: "document",
  fields: [
    defineField({
      name: "prices",
      title: "Prices",
      type: "array",
      of: [{ type: "priceItem" }],
    }),
    defineField({
      name: "beers",
      title: "Beers",
      type: "array",
      of: [{ type: "beerItem" }],
    }),
    defineField({
      name: "rotation",
      title: "Rotation Beers",
      type: "array",
      of: [{ type: "beerItem" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Tap List" };
    },
  },
});
