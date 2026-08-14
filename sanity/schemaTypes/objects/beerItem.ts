import { defineField, defineType } from "sanity";

export const beerItemType = defineType({
  name: "beerItem",
  title: "Beer Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "abv", title: "ABV", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});
