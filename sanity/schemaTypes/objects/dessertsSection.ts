import { defineField, defineType } from "sanity";

export const dessertsSectionType = defineType({
  name: "dessertsSection",
  title: "Desserts Section",
  type: "object",
  fields: [
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "options",
      title: "Dessert Options",
      type: "array",
      of: [{ type: "dessertItem" }],
    }),
  ],
});
