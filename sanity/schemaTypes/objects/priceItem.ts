import { defineField, defineType } from "sanity";

export const priceItemType = defineType({
  name: "priceItem",
  title: "Price Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "clocktower", title: "Clocktower Price", type: "string" }),
  ],
});
