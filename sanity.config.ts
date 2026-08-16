"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { dataset, projectId, studioTitle } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

const singletonTypes = new Set(["southHillMenu", "brewPubMenu", "tapList"]);

export default defineConfig({
  name: "default",
  title: studioTitle,
  projectId,
  dataset,
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    presentationTool({
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        match: "/:path*",
      },
    }),
    structureTool({
      structure: (S) =>
        S.list()
          .title("Menus")
          .items([
            S.listItem()
              .title("South Hill Menu")
              .id("southHillMenu")
              .child(
                S.document()
                  .schemaType("southHillMenu")
                  .documentId("southHillMenu")
                  .title("South Hill Menu")
              ),
            S.listItem()
              .title("BrewPub Menu")
              .id("brewPubMenu")
              .child(
                S.document()
                  .schemaType("brewPubMenu")
                  .documentId("brewPubMenu")
                  .title("BrewPub Menu")
              ),
            S.listItem()
              .title("Tap List")
              .id("tapList")
              .child(
                S.document()
                  .schemaType("tapList")
                  .documentId("tapList")
                  .title("Tap List")
              ),
          ]),
    }),
  ],
  document: {
    newDocumentOptions: (prev, context) =>
      context.creationContext.type === "global"
        ? prev.filter((t) => !singletonTypes.has(t.templateId))
        : prev,
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter(
            ({ action }) =>
              action !== "delete" &&
              action !== "duplicate" &&
              action !== "unpublish"
          )
        : prev,
  },
});
