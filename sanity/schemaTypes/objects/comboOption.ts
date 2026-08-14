import { defineField, defineType } from "sanity";

export const comboOptionType = defineType({
  name: "comboOption",
  title: "Combo Option",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({
      name: "options",
      title: "Topping Options",
      type: "array",
      of: [{ type: "toppingOption" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "subtitle" },
    prepare({ title, subtitle }) {
      return { title: title || "Untitled", subtitle };
    },
  },
});
