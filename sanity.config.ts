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
              ),
            S.listItem()
              .title("BrewPub Menu")
              .id("brewPubMenu")
              .child(
                S.document()
                  .schemaType("brewPubMenu")
                  .documentId("brewPubMenu")
              ),
            S.listItem()
              .title("Tap List")
              .id("tapList")
              .child(S.document().schemaType("tapList").documentId("tapList")),
          ]),
    }),
    presentationTool({
      previewUrl: {
        initial: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      resolve: {
        mainDocuments: [
          { route: "/BenniditosMenu", type: "southHillMenu" },
          { route: "/BrewPubMenu", type: "brewPubMenu" },
          { route: "/OnTap", type: "tapList" },
        ],
      },
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
