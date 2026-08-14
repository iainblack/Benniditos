import { defineField, defineType } from "sanity";

export const southHillMenuType = defineType({
  name: "southHillMenu",
  title: "South Hill Menu",
  type: "document",
  fields: [
    defineField({ name: "pizzaDescription", title: "Pizza Size & Dough Options", type: "text", description: "e.g. Available in traditional hand tossed (10\", 15\", 19\") or Detroit style (10\"x14\")" }),
    defineField({
      name: "pizza",
      title: "Pizza",
      type: "object",
      fields: [
        defineField({
          name: "traditionalPizzas",
          title: "Traditional Pizzas",
          type: "array",
          of: [{ type: "basicOptions" }],
        }),
        defineField({
          name: "specialtyPizzas",
          title: "Specialty Pizzas",
          type: "array",
          of: [{ type: "basicOptions" }],
        }),
        defineField({
          name: "bySlice",
          title: "Pizza By Slice",
          type: "pizzaBySlice",
        }),
      ],
    }),
    defineField({ name: "toppings", title: "Toppings", type: "toppings" }),
    defineField({ name: "starters", title: "Starters", type: "startersSection" }),
    defineField({ name: "salads", title: "Salads", type: "saladsSection" }),
    defineField({ name: "sandwiches", title: "Sandwiches", type: "sandwichSection" }),
    defineField({
      name: "calzones",
      title: "Calzones",
      type: "array",
      of: [{ type: "calzoneItem" }],
    }),
    defineField({ name: "pasta", title: "Pasta", type: "pastaSection" }),
    defineField({ name: "desserts", title: "Desserts", type: "dessertsSection" }),
    defineField({ name: "soda", title: "Soda & Drinks", type: "sodaSection" }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "South Hill Menu" };
    },
  },
});
