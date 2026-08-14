import { defineField, defineType } from "sanity";

export const soupItemType = defineType({
  name: "soupItem",
  title: "Soup Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "cup", title: "Cup Price", type: "string" }),
    defineField({ name: "bowl", title: "Bowl Price", type: "string" }),
  ],
  preview: {
    select: { title: "name" },
    prepare({ title }) {
      return { title: title || "Untitled" };
    },
  },
});
