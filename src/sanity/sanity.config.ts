import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas";

const config = defineConfig({
  projectId: "4vbs99s3",
  dataset: "production",
  title: "MDM Structural and Civil Engineering",
  apiVersion: "2022-03-07",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
