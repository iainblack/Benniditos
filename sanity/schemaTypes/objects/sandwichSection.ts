import { defineField, defineType } from "sanity";

export const sandwichSectionType = defineType({
  name: "sandwichSection",
  title: "Sandwich Section",
  type: "object",
  fields: [
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "hotSandwiches",
      title: "Hot Sandwiches",
      type: "array",
      of: [{ type: "sandwichOptions" }],
    }),
    defineField({
      name: "coldSandwiches",
      title: "Cold Sandwiches",
      type: "array",
      of: [{ type: "sandwichOptions" }],
    }),
  ],
});
