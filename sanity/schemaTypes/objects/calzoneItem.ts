import { defineField, defineType } from "sanity";

export const calzoneItemType = defineType({
  name: "calzoneItem",
  title: "Calzone Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "price", title: "Price", type: "string" }),
  ],
});
