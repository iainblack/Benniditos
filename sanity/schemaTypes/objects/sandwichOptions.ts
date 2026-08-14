import { defineField, defineType } from "sanity";

export const sandwichOptionsType = defineType({
  name: "sandwichOptions",
  title: "Sandwich Menu Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "half", title: "Half Price", type: "string" }),
    defineField({ name: "whole", title: "Whole Price", type: "string" }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
    prepare({ title, subtitle }) {
      return { title: title || "Untitled", subtitle };
    },
  },
});
