import { defineField, defineType } from "sanity";

export const toppingsType = defineType({
  name: "toppings",
  title: "Toppings",
  type: "object",
  fields: [
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "cheese",
      title: "Cheese Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "meats",
      title: "Meat Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "veggies",
      title: "Veggie Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sauces",
      title: "Sauce Options",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
