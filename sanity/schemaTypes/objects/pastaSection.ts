import { defineField, defineType } from "sanity";

export const pastaSectionType = defineType({
  name: "pastaSection",
  title: "Pasta Section",
  type: "object",
  fields: [
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "pastas",
      title: "Pasta Types",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sauces",
      title: "Sauces",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "half", title: "Half Price", type: "string" }),
            defineField({ name: "whole", title: "Whole Price", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
