import { defineField, defineType } from "sanity";

export const brewPubMenuType = defineType({
  name: "brewPubMenu",
  title: "BrewPub Menu",
  type: "document",
  fields: [
    defineField({
      name: "pizza",
      title: "Pizza",
      type: "object",
      fields: [
        defineField({ name: "description1", title: "Description 1", type: "string" }),
        defineField({ name: "description2", title: "Description 2", type: "string" }),
        defineField({
          name: "column1",
          title: "Column 1",
          type: "array",
          of: [{ type: "basicOptions" }],
        }),
        defineField({
          name: "column2",
          title: "Column 2",
          type: "array",
          of: [{ type: "basicOptions" }],
        }),
      ],
    }),
    defineField({ name: "toppings", title: "Toppings", type: "toppings" }),
    defineField({ name: "starters", title: "Starters", type: "startersSection" }),
    defineField({ name: "salads", title: "Salads", type: "saladsSection" }),
    defineField({ name: "sandwiches", title: "Sandwiches", type: "sandwichSection" }),
    defineField({ name: "desserts", title: "Desserts", type: "dessertsSection" }),
    defineField({ name: "soda", title: "Soda", type: "sodaSection" }),
  ],
  preview: {
    select: { title: "pizza.description1" },
    prepare({ title }) {
      return { title: title || "BrewPub Menu" };
    },
  },
});
