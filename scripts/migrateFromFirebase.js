const fetch = require("node-fetch");

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vmmau7wd";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const TOKEN = process.env.SANITY_WRITE_TOKEN;
const API_URL = `https://${PROJECT_ID}.api.sanity.io/v2026-01-01/data/mutate/${DATASET}`;

async function fetchFirebaseData() {
  const southHillRes = await fetch(
    "https://benniditos-menus-default-rtdb.firebaseio.com/SouthHill.json"
  );
  const southHill = await southHillRes.json();

  const brewPubRes = await fetch(
    "https://benniditos-menus-default-rtdb.firebaseio.com/BrewPub.json"
  );
  const brewPub = await brewPubRes.json();

  return { southHill, brewPub };
}

async function migrateSouthHillMenu(southHill) {
  const pizza = {
    description1: southHill.pizza.description1,
    description2: southHill.pizza.description2,
    traditionalPizzas: southHill.pizza.column1
      .filter(p => p !== null)
      .map(p => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
    specialtyPizzas: southHill.pizza.column2
      .filter(p => p !== null)
      .map(p => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
  };

  const toppings = {
    cheese: southHill.toppings.cheese.filter(t => t !== null),
    meats: southHill.toppings.meats.filter(t => t !== null),
    veggies: southHill.toppings.veggies.filter(t => t !== null),
    sauces: southHill.toppings.sauces.filter(t => t !== null),
  };

  const starters = {
    options: southHill.starters.options
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "starterItem",
        name: s.name,
        description: s.description || "",
        price: s.price,
      })),
  };

  const salads = {
    description: southHill.salads.description,
    options: southHill.salads.options
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: s.name,
        description: s.description || "",
        small: s.small,
        medium: s.medium,
        large: s.large,
      })),
  };

  const sandwiches = {
    description: southHill.sandwiches.description || "",
    hotSandwiches: (southHill.sandwiches.hotSandwiches || [])
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
    coldSandwiches: (southHill.sandwiches.coldSandwiches || [])
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
  };

  const calzones = southHill.calzones.map(c => ({
    _key: c.name.toLowerCase().replace(/\s+/g, "-"),
    _type: "calzoneItem",
    name: c.name,
    description: c.description,
    price: c.price,
  }));

  const pasta = {
    description: southHill.pasta.description,
    pastas: southHill.pasta.pastas,
    sauces: southHill.pasta.sauces.map(s => ({
      _key: s.name.toLowerCase().replace(/\s+/g, "-"),
      _type: "object",
      name: s.name,
      description: s.description || "",
      half: s.half,
      whole: s.whole,
    })),
  };

  const desserts = {
    options: southHill.desserts.options.map(d => ({
      _key: d.name.toLowerCase().replace(/\s+/g, "-"),
      _type: "dessertItem",
      name: d.name,
      description: d.description || "",
      small: d.small,
      medium: d.medium || "",
      large: d.large || "",
    })),
  };

  const soda = {
    price: southHill.soda.price,
    options: southHill.soda.options,
  };

  return {
    pizza,
    toppings,
    starters,
    salads,
    sandwiches,
    calzones,
    pasta,
    desserts,
    soda,
  };
}

async function migrateBrewPubMenu(brewPub) {
  const pizza = {
    description1: brewPub.pizza.description1,
    description2: brewPub.pizza.description2,
    traditionalPizzas: brewPub.pizza.column1
      .filter(p => p !== null)
      .map(p => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
    specialtyPizzas: brewPub.pizza.column2
      .filter(p => p !== null)
      .map(p => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
  };

  const toppings = {
    cheese: brewPub.toppings.cheese.filter(t => t !== null),
    meats: brewPub.toppings.meats.filter(t => t !== null),
    veggies: brewPub.toppings.veggies.filter(t => t !== null),
    sauces: brewPub.toppings.sauces.filter(t => t !== null),
  };

  const starters = {
    options: brewPub.starters.options
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "starterItem",
        name: s.name,
        description: s.description || "",
        price: s.price,
      })),
  };

  const salads = {
    description: brewPub.salads.description,
    options: brewPub.salads.options
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: s.name,
        description: s.description || "",
        small: s.small,
        medium: s.medium,
        large: s.large,
      })),
  };

  const sandwiches = {
    description: brewPub.sandwiches.description || "",
    hotSandwiches: (brewPub.sandwiches.hotSandwiches || [])
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
    coldSandwiches: (brewPub.sandwiches.coldSandwiches || [])
      .filter(s => s !== null)
      .map(s => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
  };

  const desserts = {
    options: brewPub.desserts.options.map(d => ({
      _key: d.name.toLowerCase().replace(/\s+/g, "-"),
      _type: "dessertItem",
      name: d.name,
      description: d.description || "",
      small: d.small,
      medium: d.medium || "",
      large: d.large || "",
    })),
  };

  const soda = {
    price: brewPub.soda.price,
    options: brewPub.soda.options,
  };

  return {
    pizza,
    toppings,
    starters,
    salads,
    sandwiches,
    desserts,
    soda,
  };
}

async function mutateSanity(mutations) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Mutation failed: ${JSON.stringify(data.error || data)}`);
  }

  return data;
}

async function main() {
  console.log("Fetching Firebase data...");
  const { southHill, brewPub } = await fetchFirebaseData();
  console.log("Firebase data fetched successfully\n");

  console.log("Preparing South Hill menu...");
  const southHillData = await migrateSouthHillMenu(southHill);
  console.log("South Hill prepared with", southHillData.pizza.traditionalPizzas.length + southHillData.pizza.specialtyPizzas.length, "pizzas");

  console.log("\nPreparing BrewPub menu...");
  const brewPubData = await migrateBrewPubMenu(brewPub);
  console.log("BrewPub prepared with", brewPubData.pizza.traditionalPizzas.length + brewPubData.pizza.specialtyPizzas.length, "pizzas");

  console.log("\n--- Migrating to Sanity ---");

  try {
    console.log("Patching South Hill Menu...");
    const result = await mutateSanity([
      {
        patch: {
          id: "southHillMenu",
          set: southHillData,
        },
      },
    ]);
    console.log("South Hill Menu patched! transactionId:", result.transactionId);
  } catch (err) {
    console.error("Error patching South Hill Menu:", err.message);
  }

  try {
    console.log("Patching BrewPub Menu...");
    const result = await mutateSanity([
      {
        patch: {
          id: "brewPubMenu",
          set: brewPubData,
        },
      },
    ]);
    console.log("BrewPub Menu patched! transactionId:", result.transactionId);
  } catch (err) {
    console.error("Error patching BrewPub Menu:", err.message);
  }

  console.log("\nMigration complete!");
}

main().catch(console.error);
