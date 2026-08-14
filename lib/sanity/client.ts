import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

const readToken = process.env.SANITY_API_READ_TOKEN;
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

export const isSanityConfigured = Boolean(projectId && dataset);
export const hasSanityReadToken = Boolean(readToken);
export const hasSanityWriteToken = Boolean(writeToken);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
      ...(readToken ? { token: readToken } : {}),
    })
  : null;

export const sanityWriteClient =
  isSanityConfigured && hasSanityWriteToken
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        token: writeToken,
        useCdn: false,
        perspective: "published",
      })
    : null;
