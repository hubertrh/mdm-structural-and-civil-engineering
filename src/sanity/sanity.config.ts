import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import schemas from "./schemas";
import { deskStructure } from "./utils/deskStructure";
import SanityLogo from "@/components/sanity/SanityLogo";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set([
  "companyInfo",
  "homePage",
  "servicesPage",
  "aboutPage",
  "contactPage",
]);

const config = defineConfig({
  projectId: "4vbs99s3",
  dataset: "production",
  title: "MDM Structural and Civil Engineering",
  icon: SanityLogo,
  apiVersion: "2022-03-07",
  basePath: "/admin",

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    vercelDeployTool(),
    ...(isDev ? [visionTool()] : []),
  ],

  schema: {
    types: schemas,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
