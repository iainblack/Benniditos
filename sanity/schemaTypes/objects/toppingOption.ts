import { defineField, defineType } from "sanity";

export const toppingOptionType = defineType({
  name: "toppingOption",
  title: "Topping Option",
  type: "object",
  fields: [
    defineField({ name: "topping", title: "Topping", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
  ],
  preview: {
    select: { title: "topping", subtitle: "price" },
    prepare({ title, subtitle }) {
      return { title: title || "Untitled", subtitle };
    },
  },
});
