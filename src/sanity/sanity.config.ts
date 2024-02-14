import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas";
import { deskStructure } from "./utils/deskStructure";

const config = defineConfig({
  projectId: "4vbs99s3",
  dataset: "production",
  title: "MDM Structural and Civil Engineering",
  apiVersion: "2022-03-07",
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});

export default config;
