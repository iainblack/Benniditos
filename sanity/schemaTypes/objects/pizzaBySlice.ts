import { defineField, defineType } from "sanity";

export const pizzaBySliceType = defineType({
  name: "pizzaBySlice",
  title: "Pizza By Slice",
  type: "object",
  fields: [
    defineField({ name: "description1", title: "Description 1", type: "string" }),
    defineField({ name: "description2", title: "Description 2", type: "string" }),
    defineField({
      name: "comboOptions",
      title: "Combo Options",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
            defineField({
              name: "options",
              title: "Topping Options",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "topping", title: "Topping", type: "string" }),
                    defineField({ name: "price", title: "Price", type: "string" }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "soup",
      title: "Soup",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "cup", title: "Cup Price", type: "string" }),
        defineField({ name: "bowl", title: "Bowl Price", type: "string" }),
      ],
    }),
  ],
});
