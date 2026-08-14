import { defineField, defineType } from "sanity";

export const pizzaBySliceType = defineType({
  name: "pizzaBySlice",
  title: "Pizza By Slice",
  type: "object",
  fields: [
    defineField({ name: "description1", title: "Description 1", type: "string" }),
    defineField({ name: "description2", title: "Description 2", type: "string" }),
    defineField({
      name: "comboOptions",
      title: "Combo Options",
      type: "array",
      of: [{ type: "comboOption" }],
    }),
    defineField({ name: "soup", title: "Soup", type: "soupItem" }),
  ],
});
