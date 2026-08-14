import { defineField, defineType } from "sanity";

export const starterItemType = defineType({
  name: "starterItem",
  title: "Starter Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "price", title: "Price", type: "string" }),
  ],
});
