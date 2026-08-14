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
  return fetchDocument<BenniditosMenuConfig>(
    southHillMenuQuery,
    BenniditosMenuData as BenniditosMenuConfig
  );
}

export async function getBrewPubMenu(): Promise<BenniditosMenuConfig> {
  return fetchDocument<BenniditosMenuConfig>(
    brewPubMenuQuery,
    BrewPubMenuData as BenniditosMenuConfig
  );
}

export async function getTapList(): Promise<TapListConfig> {
  return fetchDocument<TapListConfig>(
    tapListQuery,
    TapListData as TapListConfig
  );
}
