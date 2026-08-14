import { defineField, defineType } from "sanity";

export const startersSectionType = defineType({
  name: "startersSection",
  title: "Starters Section",
  type: "object",
  fields: [
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "options",
      title: "Starter Options",
      type: "array",
      of: [{ type: "starterItem" }],
    }),
  ],
});
