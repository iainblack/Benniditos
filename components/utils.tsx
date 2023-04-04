import { Box, Divider, Theme, Typography, useTheme } from "@mui/material";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export interface BenniditosMenuProps {
  theme: Theme;
  isSmallScreen: boolean;
}

export const BenniditosMenuData = {
  specialtyPizzas: {
    left: [
      {
        name: "Cheese",
        description:
          "Pure, whole milk mozzarella cheese & our own tomato sauce. That’s it! Not a plain cheese pizza, a great pizza!",
        small: "11.99",
        medium: "18.99",
        large: "21.99",
      },
      {
        name: "6 Cheese",
        description:
          "Red sauce, mozzarella, feta, ricotta, fontina,parmesan & romano cheese",
        small: "17.99",
        medium: "27.99",
        large: "29.99",
      },
      {
        name: "Margarita",
        description:
          "Garlic sauce, mozzarella and Romano cheese,fresh tomatoes & basil",
        small: "13.49",
        medium: "19.99",
        large: "27.99",
      },
      {
        name: "Greek Primo",
        description:
          "Red sauce, mozzarella and feta cheese, kalamata & green olives, roasted red peppers & pepperoncini",
        small: "15.99",
        medium: "23.99",
        large: "31.00",
      },
      {
        name: "Bennidito’s Original Pesto",
        description:
          "Olive oil & fresh garlic sauce topped with fontina, mozzarella & ricotta cheese, fresh red peppers & rings of pesto. Spokane’s favorite pesto pie!",
        small: "15.99",
        medium: "23.99",
        large: "31.00",
      },
      {
        name: "Florentine",
        description:
          "Red sauce, mozzarella cheese, sun-dried tomatoes, spinach, roasted garlic & goat cheese",
        small: "15.99",
        medium: "25.99",
        large: "32.99",
      },
      {
        name: "Classico",
        description:
          "Garlic sauce, mozzarella cheese, fresh tomatoes, artichoke hearts, goat cheese, jalapeños & gruyère cheese",
        small: "15.99",
        medium: "25.99",
        large: "32.00",
      },
      {
        name: "Veggie",
        description:
          "Red sauce, mozzarella cheese, with generous toppings of fresh tomatoes, mushrooms, green peppers, onions & black olives",
        small: "14.99",
        medium: "22.99",
        large: "29.00",
      },
      {
        name: "Alternative Veggie",
        description:
          "Cheese-free, red sauce, tomatoes, fresh mushrooms,green peppers, onions, zucchini, black olives & kalamata olives",
        small: "13.25",
        medium: "19.59",
        large: "25.99",
      },
      {
        name: "The Saxon",
        description:
          "Red sauce, fresh garlic, mozzarella cheese, artichoke hearts, fresh mushrooms, pesto & goat cheese",
        small: "15.99",
        medium: "25.99",
        large: "32.00",
      },
      {
        name: "Paizano",
        description:
          "Red sauce, fresh garlic, mozzarella cheese, artichoke hearts, fresh mushrooms, pesto & goat cheese",
        small: "15.99",
        medium: "25.99",
        large: "32.00",
      },
      {
        name: "14th Ave Primo",
        description:
          "Pesto sauce, mozzarella and fontina cheeses, artichoke hearts, kalamata olives & fresh tomatoes",
        small: "15.99",
        medium: "25.99",
        large: "31.00",
      },
    ],
    right: [
      {
        name: "Double Pepperoni",
        description:
          "Red sauce, mozzarella cheese, covered with a blanket of pepperoni",
        small: "14.99",
        medium: "20.99",
        large: "26.99",
      },
      {
        name: "Grand Boulevard",
        description:
          "Red sauce, mozzarella cheese, pepperoni, Italian sausage, fresh mushrooms, black olives, green peppers & onions",
        small: "15.99",
        medium: "23.99",
        large: "29.99",
      },
      {
        name: "Boogie Fever",
        description:
          "Red sauce, mozzarella cheese, Italian sausage, fresh mushrooms, onions",
        small: "15.99",
        medium: "23.99",
        large: "29.99",
      },
      {
        name: "The High Drive",
        description:
          "Red sauce, mozzarella and fontina cheeses, Prosciutto & fresh red onions",
        small: "15.99",
        medium: "25.99",
        large: "29.99",
      },
      {
        name: "Chicken Alfredo",
        description:
          "Alfredo sauce, mozzarella, spinach, mushrooms, artichoke hearts, chicken & pancetta bacon",
        small: "18.99",
        medium: "27.99",
        large: "32.00",
      },
      {
        name: "L.C. Primo",
        description:
          "Pesto sauce, mozzarella cheese fresh garlic, marinated chicken, mushrooms, feta & roasted garlic",
        small: "16.99",
        medium: "26.99",
        large: "32.00",
      },
      {
        name: "Meat Primo",
        description:
          "Red sauce, mozzarella cheese, pepperoni, salami, Canadian bacon, prosciutto ham, pancetta bacon, Italian sausage & meatballs",
        small: "18.99",
        medium: "30.99",
        large: "37.00",
      },
      {
        name: "Maui Wowie",
        description:
          "Pray for surf with red sauce, mozzarella and fontina cheese, prosciutto ham, pancetta bacon & pineapple",
        small: "16.99",
        medium: "25.99",
        large: "31.00",
      },
      {
        name: "The Duncan Garden Primo",
        description:
          "Red sauce, fresh garlic, mozzarella cheese, fresh mushrooms, tomatoes & sun-dried tomatoes",
        small: "16.99",
        medium: "25.99",
        large: "30.00",
      },
      {
        name: "Italian Beef Primo",
        description:
          "Garlic sauce, mozzarella & fontina cheese, Italian beef, fresh green peppers & red onions",
        small: "15.99",
        medium: "23.99",
        large: "30.00",
      },
      {
        name: "Chicken Garden Primo",
        description:
          "Red sauce, fresh garlic, mozzarella cheese, chicken, sun-dried tomatoes, fresh mushrooms & tomatoes",
        small: "16.99",
        medium: "25.99",
        large: "32.00",
      },
    ],
  },
  toppings: {
    cheese: [
      "Feta",
      "Fontina*",
      "Goat Cheese*",
      "Gruyère",
      "Mozzarella",
      "Ricotta",
    ],
    meats: [
      "Anchovies*",
      "Canadian Bacon*",
      "Chicken*",
      "Italian Meatballs*",
      "Italian Beef*",
      "Pepperoni*",
      "Pancetta Bacon*",
      "Proscuitto*",
      "Salami*",
      "Sausage*",
    ],
    veggies: [
      "Artichokes",
      "Basil",
      "Black Olives",
      "Kalamata Olives",
      "Green Olive",
      "Garlic",
      "Roasted Garlic",
      "Green Peppers",
      "Jalapeño Peppers",
      "Mushrooms",
      "Onions",
      "Red Bell Peppers",
      "Sun-dried Tomatoes",
      "Tomatoes",
      "Pepperoncini",
      "Pesto",
      "Pineapple",
      "Spinach",
      "Zucchini",
    ],
    sauces: [
      "Tomato Sauce",
      "Olive Oil Sauce",
      "Garlic Sauce",
      "Pesto Sauce",
      "Alfredo Sauce",
    ],
  },
  breadsAndBreadsticks: [
    {
      name: "Bennidito’s Pizza Bread",
      description:
        "Fresh baked pizza crust, topped with olive oil and aged parmesan",
      price: "9.99",
    },
    {
      name: "Cambozola Bread",
      description:
        "Bennidito’s Pizza Bread topped with roasted garlic and aged parmesan with Cambozola on the side",
      price: "18.99",
    },
    {
      name: "Garlic Bread",
      price: "6.25",
    },
    {
      name: "Garlic Cheese Bread",
      price: "9.99",
    },
    {
      name: "Bread Sticks with dipping sauce",
      price: "6.99",
    },
    {
      name: "Beer Buddies with dipping sauce",
      price: "6.99",
    },
    {
      name: "Dipping Sauce",
      description: "Your choice of Red, Pesto, or Ranch",
      price: "1.25",
    },
    {
      name: "Alfredo Dipping Sauce",
      price: "1.50",
    },
  ],
  salads: [
    {
      name: "Mixed Green Salad",
      description:
        "Romaine lettuce mix, tomatoes, red onion, mushrooms. Your choice of dressing: Blue cheese, Vinegar & Oil, Pesto, or Ranch",
      small: "5.50",
      medium: "10.00",
      large: "17.99",
    },
    {
      name: "Antipasto Salad",
      description:
        "No Lettuce! Salami, roasted garlic, artichoke hearts, fontina cheese, roasted red peppers, green olives & kalamata olives with an oil & vinegar dressing",
      small: "9.25",
      medium: "21.00",
      large: "28.00",
    },
    {
      name: "Chicken Salad",
      description: "Romaine lettuce mix & marinated chicken parmesan",
      small: "6.99",
      medium: "14.00",
      large: "22.00",
    },
    {
      name: "Greek Salad",
      description:
        "Romaine lettuce, feta, green olives, roasted red peppers, kalamata olives & pepperoncini",
      small: "7.25",
      medium: "14.00",
      large: "21.00",
    },
    {
      name: "Green Salad Primo",
      description:
        "Romaine lettuce, tomatoes, onions, mushrooms, feta & sunflower seeds",
      small: "6.99",
      medium: "11.99",
      large: "19.99",
    },
    {
      name: "Benniditos Salad Primo",
      description:
        "Romaine lettuce mix, salami, roasted garlic, artichokes, fontina cheese, green olives, red onions, and pepperoncini with oil & vinegar dressing",
      small: "8.99",
      medium: "16.50",
      large: "24.00",
    },
  ],
  pasta: {
    description:
      "Pair one of our delicious pastas with your choice of any of our signature sauces and also enjoy a side of our new homemade pizza bread",
    pastas: ["Fettuccine", "Spaghetti"],
    sauces: [
      {
        name: "Marinara",
        description: "Our base red sauce",
        half: "6.00",
        whole: "11.00",
      },
      {
        name: "Bolognese",
        description:
          "Marinara sauce, mushrooms, italian sausage, and our homemade meatballs",
        half: "7.00",
        whole: "13.00",
      },
      {
        name: "Alfredo",
        half: "8.00",
        whole: "14.00",
      },
      {
        name: "Chicken Alfredo",
        half: "10.00",
        whole: "18.00",
      },
      {
        name: "Spaghetti & Meatballs",
        description: "Bolognese sauce, sautéed meatballs and spaghetti",
        half: "8.00",
        whole: "15.00",
      },
      {
        name: "Kid's Plate (dine-in only)",
        description:
          "Your choice of spaghetti with marinara, bolognese sauce, or buttered noodles, a kid's drink, and chocolate ice cream",
        half: "6.00",
      },
    ],
  },
};