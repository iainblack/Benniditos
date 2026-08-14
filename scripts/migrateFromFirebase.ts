import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vmmau7wd",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

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

async function migrateSouthHillMenu(southHill: any) {
  // Transform Firebase data to Sanity format
  const sanityDoc = {
    _type: "southHillMenu",
    _id: "south-hill-menu",
  };

  // Pizza section
  const pizza = {
    description1: southHill.pizza.description1,
    description2: southHill.pizza.description2,
    traditionalPizzas: southHill.pizza.column1
      .filter((p: any) => p !== null)
      .map((p: any) => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
    specialtyPizzas: southHill.pizza.column2
      .filter((p: any) => p !== null)
      .map((p: any) => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
  };

  // Toppings
  const toppings = {
    cheese: southHill.toppings.cheese.filter((t: any) => t !== null),
    meats: southHill.toppings.meats.filter((t: any) => t !== null),
    veggies: southHill.toppings.veggies.filter((t: any) => t !== null),
    sauces: southHill.toppings.sauces.filter((t: any) => t !== null),
  };

  // Starters
  const starters = {
    options: southHill.starters.options
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "starterItem",
        name: s.name,
        description: s.description || "",
        price: s.price,
      })),
  };

  // Salads
  const salads = {
    description: southHill.salads.description,
    options: southHill.salads.options
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: s.name,
        description: s.description || "",
        small: s.small,
        medium: s.medium,
        large: s.large,
      })),
  };

  // Sandwiches
  const sandwiches = {
    description: southHill.sandwiches.description || "",
    hotSandwiches: (southHill.sandwiches.hotSandwiches || [])
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
    coldSandwiches: (southHill.sandwiches.coldSandwiches || [])
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
  };

  // Calzones
  const calzones = southHill.calzones.map((c: any) => ({
    _key: c.name.toLowerCase().replace(/\s+/g, "-"),
    _type: "calzoneItem",
    name: c.name,
    description: c.description,
    price: c.price,
  }));

  // Pasta
  const pasta = {
    description: southHill.pasta.description,
    pastas: southHill.pasta.pastas,
    sauces: southHill.pasta.sauces.map((s: any) => ({
      _key: s.name.toLowerCase().replace(/\s+/g, "-"),
      _type: "pastaSauce",
      name: s.name,
      description: s.description || "",
      half: s.half,
      whole: s.whole,
    })),
  };

  // Desserts
  const desserts = {
    options: southHill.desserts.options.map((d: any) => ({
      _key: d.name.toLowerCase().replace(/\s+/g, "-"),
      _type: "dessertItem",
      name: d.name,
      description: d.description || "",
      small: d.small,
      medium: d.medium || "",
      large: d.large || "",
    })),
  };

  // Soda
  const soda = {
    price: southHill.soda.price,
    options: southHill.soda.options,
  };

  const fullDoc = {
    ...sanityDoc,
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

  console.log("South Hill Menu document prepared");
  console.log("Pizza items:", pizza.traditionalPizzas.length + pizza.specialtyPizzas.length);
  console.log("Toppings:", toppings.cheese.length + toppings.meats.length + toppings.veggies.length + toppings.sauces.length);
  console.log("Starters:", starters.options.length);
  console.log("Salads:", salads.options.length);
  console.log("Hot sandwiches:", sandwiches.hotSandwiches.length);
  console.log("Cold sandwiches:", sandwiches.coldSandwiches.length);
  console.log("Calzones:", calzones.length);
  console.log("Pasta sauces:", pasta.sauces.length);
  console.log("Desserts:", desserts.options.length);

  return fullDoc;
}

async function migrateBrewPubMenu(brewPub: any) {
  const sanityDoc = {
    _type: "brewPubMenu",
    _id: "brew-pub-menu",
  };

  // Pizza section
  const pizza = {
    description1: brewPub.pizza.description1,
    description2: brewPub.pizza.description2,
    traditionalPizzas: brewPub.pizza.column1
      .filter((p: any) => p !== null)
      .map((p: any) => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
    specialtyPizzas: brewPub.pizza.column2
      .filter((p: any) => p !== null)
      .map((p: any) => ({
        _key: p.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: p.name,
        description: p.description,
        small: p.small,
        medium: p.medium,
        large: p.large,
      })),
  };

  // Toppings
  const toppings = {
    cheese: brewPub.toppings.cheese.filter((t: any) => t !== null),
    meats: brewPub.toppings.meats.filter((t: any) => t !== null),
    veggies: brewPub.toppings.veggies.filter((t: any) => t !== null),
    sauces: brewPub.toppings.sauces.filter((t: any) => t !== null),
  };

  // Starters
  const starters = {
    options: brewPub.starters.options
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "starterItem",
        name: s.name,
        description: s.description || "",
        price: s.price,
      })),
  };

  // Salads
  const salads = {
    description: brewPub.salads.description,
    options: brewPub.salads.options
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "basicOptions",
        name: s.name,
        description: s.description || "",
        small: s.small,
        medium: s.medium,
        large: s.large,
      })),
  };

  // Sandwiches
  const sandwiches = {
    description: brewPub.sandwiches.description || "",
    hotSandwiches: (brewPub.sandwiches.hotSandwiches || [])
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
    coldSandwiches: (brewPub.sandwiches.coldSandwiches || [])
      .filter((s: any) => s !== null)
      .map((s: any) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, "-"),
        _type: "sandwichOptions",
        name: s.name,
        description: s.description || "",
        half: s.half,
        whole: s.whole,
      })),
  };

  // Desserts
  const desserts = {
    options: brewPub.desserts.options.map((d: any) => ({
      _key: d.name.toLowerCase().replace(/\s+/g, "-"),
      _type: "dessertItem",
      name: d.name,
      description: d.description || "",
      small: d.small,
      medium: d.medium || "",
      large: d.large || "",
    })),
  };

  // Soda
  const soda = {
    price: brewPub.soda.price,
    options: brewPub.soda.options,
  };

  const fullDoc = {
    ...sanityDoc,
    pizza,
    toppings,
    starters,
    salads,
    sandwiches,
    desserts,
    soda,
  };

  console.log("\nBrewPub Menu document prepared");
  console.log("Pizza items:", pizza.traditionalPizzas.length + pizza.specialtyPizzas.length);
  console.log("Toppings:", toppings.cheese.length + toppings.meats.length + toppings.veggies.length + toppings.sauces.length);
  console.log("Starters:", starters.options.length);
  console.log("Salads:", salads.options.length);
  console.log("Hot sandwiches:", sandwiches.hotSandwiches.length);
  console.log("Cold sandwiches:", sandwiches.coldSandwiches.length);
  console.log("Desserts:", desserts.options.length);

  return fullDoc;
}

async function main() {
  console.log("Fetching Firebase data...");
  const { southHill, brewPub } = await fetchFirebaseData();
  console.log("Firebase data fetched successfully");

  console.log("\nPreparing South Hill menu...");
  const southHillDoc = await migrateSouthHillMenu(southHill);

  console.log("\nPreparing BrewPub menu...");
  const brewPubDoc = await migrateBrewPubMenu(brewPub);

  console.log("\n--- Migrating to Sanity ---");

  try {
    console.log("Creating/replacing South Hill Menu...");
    await sanityClient.createOrReplace(southHillDoc);
    console.log("South Hill Menu migrated successfully!");
  } catch (err) {
    console.error("Error migrating South Hill Menu:", err);
  }

  try {
    console.log("Creating/replacing BrewPub Menu...");
    await sanityClient.createOrReplace(brewPubDoc);
    console.log("BrewPub Menu migrated successfully!");
  } catch (err) {
    console.error("Error migrating BrewPub Menu:", err);
  }

  console.log("\nMigration complete!");
}

main().catch(console.error);
