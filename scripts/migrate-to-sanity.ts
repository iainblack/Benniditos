import { createClient } from "@sanity/client";
import BenniditosMenuData from "../src/utils/BenniditosMenuData.json";
import BrewPubMenuData from "../src/utils/BrewPubMenuData.json";
import TapListData from "../src/utils/BenniditosTapListData.json";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2026-01-01",
  useCdn: false,
});

async function migrate() {
  if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_WRITE_TOKEN) {
    console.error(
      "Please set SANITY_PROJECT_ID and SANITY_WRITE_TOKEN environment variables"
    );
    process.exit(1);
  }

  console.log("Migrating South Hill Menu...");
  await client.createOrReplace({
    _id: "southHillMenu",
    _type: "southHillMenu",
    ...(BenniditosMenuData as object),
  });

  console.log("Migrating BrewPub Menu...");
  await client.createOrReplace({
    _id: "brewPubMenu",
    _type: "brewPubMenu",
    ...(BrewPubMenuData as object),
  });

  console.log("Migrating Tap List...");
  await client.createOrReplace({
    _id: "tapList",
    _type: "tapList",
    ...(TapListData as object),
  });

  console.log("Migration complete!");
}

migrate().catch(console.error);
