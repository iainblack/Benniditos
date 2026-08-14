import { defineField, defineType } from "sanity";

export const pizzaColumnType = defineType({
  name: "pizzaColumn",
  title: "Pizza Column",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Pizza Items",
      type: "array",
      of: [{ type: "basicOptions" }],
    }),
  ],
});
