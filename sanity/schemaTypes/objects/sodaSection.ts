import { defineField, defineType } from "sanity";

export const sodaSectionType = defineType({
  name: "sodaSection",
  title: "Soda Section",
  type: "object",
  fields: [
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({
      name: "options",
      title: "Soda Options",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
