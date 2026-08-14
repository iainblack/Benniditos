import { sanityClient, isSanityConfigured } from "@/lib/sanity/client";
import {
  southHillMenuQuery,
  brewPubMenuQuery,
  tapListQuery,
} from "@/lib/sanity/queries";
import { BenniditosMenuConfig, TapListConfig } from "@/src/utils/utils";
import BenniditosMenuData from "@/src/utils/BenniditosMenuData.json";
import BrewPubMenuData from "@/src/utils/BrewPubMenuData.json";
import TapListData from "@/src/utils/BenniditosTapListData.json";

interface SanityPizzaItem {
  name: string;
  description: string;
  small: string;
  medium: string;
  large: string;
}

interface SanitySouthHillMenu {
  pizza?: {
    description1?: string;
    description2?: string;
    traditionalPizzas?: SanityPizzaItem[];
    specialtyPizzas?: SanityPizzaItem[];
    bySlice?: unknown;
  };
  toppings?: unknown;
  starters?: unknown;
  salads?: unknown;
  sandwiches?: unknown;
  calzones?: unknown;
  pasta?: unknown;
  desserts?: unknown;
  soda?: unknown;
}

interface SanityBrewPubMenu {
  pizza?: {
    description1?: string;
    description2?: string;
    traditionalPizzas?: SanityPizzaItem[];
    specialtyPizzas?: SanityPizzaItem[];
  };
  toppings?: unknown;
  starters?: unknown;
  salads?: unknown;
  sandwiches?: unknown;
  desserts?: unknown;
  soda?: unknown;
}

function transformSouthHillMenu(data: SanitySouthHillMenu): BenniditosMenuConfig {
  if (!data) return BenniditosMenuData as BenniditosMenuConfig;

  return {
    pizza: {
      description1: data.pizza?.description1 || "",
      description2: data.pizza?.description2 || "",
      column1: data.pizza?.traditionalPizzas || [],
      column2: data.pizza?.specialtyPizzas || [],
      bySlice: data.pizza?.bySlice as BenniditosMenuConfig["pizza"]["bySlice"],
    },
    toppings: data.toppings as BenniditosMenuConfig["toppings"],
    starters: data.starters as BenniditosMenuConfig["starters"],
    salads: data.salads as BenniditosMenuConfig["salads"],
    sandwiches: data.sandwiches as BenniditosMenuConfig["sandwiches"],
    calzones: data.calzones as BenniditosMenuConfig["calzones"],
    pasta: data.pasta as BenniditosMenuConfig["pasta"],
    desserts: data.desserts as BenniditosMenuConfig["desserts"],
    soda: data.soda as BenniditosMenuConfig["soda"],
  };
}

function transformBrewPubMenu(data: SanityBrewPubMenu): BenniditosMenuConfig {
  if (!data) return BrewPubMenuData as BenniditosMenuConfig;

  return {
    pizza: {
      description1: data.pizza?.description1 || "",
      description2: data.pizza?.description2 || "",
      column1: data.pizza?.traditionalPizzas || [],
      column2: data.pizza?.specialtyPizzas || [],
    },
    toppings: data.toppings as BenniditosMenuConfig["toppings"],
    starters: data.starters as BenniditosMenuConfig["starters"],
    salads: data.salads as BenniditosMenuConfig["salads"],
    sandwiches: data.sandwiches as BenniditosMenuConfig["sandwiches"],
    calzones: [],
    pasta: null as unknown as BenniditosMenuConfig["pasta"],
    desserts: data.desserts as BenniditosMenuConfig["desserts"],
    soda: data.soda as BenniditosMenuConfig["soda"],
  };
}

async function fetchSanityDocument<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured || !sanityClient) {
    return null;
  }

  try {
    const data = await sanityClient.fetch<T | null>(query, {}, { next: { revalidate: 3600 } });
    return data;
  } catch {
    return null;
  }
}

async function fetchDocument<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured || !sanityClient) {
    return fallback;
  }

  try {
    const data = await sanityClient.fetch<T | null>(query, {}, { next: { revalidate: 3600 } });
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSouthHillMenu(): Promise<BenniditosMenuConfig> {
  const data = await fetchSanityDocument<SanitySouthHillMenu>(southHillMenuQuery);
  if (!data) return BenniditosMenuData as BenniditosMenuConfig;
  return transformSouthHillMenu(data);
}

export async function getBrewPubMenu(): Promise<BenniditosMenuConfig> {
  const data = await fetchSanityDocument<SanityBrewPubMenu>(brewPubMenuQuery);
  if (!data) return BrewPubMenuData as BenniditosMenuConfig;
  return transformBrewPubMenu(data);
}

export async function getTapList(): Promise<TapListConfig> {
  return fetchDocument<TapListConfig>(
    tapListQuery,
    TapListData as TapListConfig
  );
}
