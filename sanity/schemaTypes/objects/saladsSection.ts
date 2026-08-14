import { defineField, defineType } from "sanity";

export const saladsSectionType = defineType({
  name: "saladsSection",
  title: "Salads Section",
  type: "object",
  fields: [
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "options",
      title: "Salad Options",
      type: "array",
      of: [{ type: "basicOptions" }],
    }),
  ],
});
