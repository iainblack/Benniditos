import { defineField, defineType } from "sanity";

export const dessertItemType = defineType({
  name: "dessertItem",
  title: "Dessert Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "small", title: "Small Price", type: "string" }),
    defineField({ name: "medium", title: "Medium Price", type: "string" }),
    defineField({ name: "large", title: "Large Price", type: "string" }),
  ],
});
