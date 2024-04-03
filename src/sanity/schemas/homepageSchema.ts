import { Rule } from "sanity";

const homepageSchema = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "header1",
          title: "Header 1",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "header2",
          title: "Header 2",
          type: "object",
          fields: [
            {
              name: "firstLine",
              title: "First Shown Line",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "secondLine",
              title: "Second Shown Line",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "welcome",
      title: "Welcome Section",
      type: "object",
      fields: [
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 5 }],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
        {
          name: "slogan",
          title: "Slogan",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "services",
      title: "Services Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Header",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 5 }],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
        {
          name: "services",
          title: "Services",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 5,
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: "image",
                  title: "Image (Aspect Ratio: 3:2)",
                  type: "image",
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule: Rule) => Rule.required().length(3),
        },
      ],
    },
    {
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Header",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 5 }],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
        {
          name: "guidingPillars",
          title: "Guiding Pillars",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 5,
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule: Rule) => Rule.required().length(3),
        },
      ],
    },
    {
      name: "projects",
      title: "Projects Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Header",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 5 }],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
        {
          name: "projects",
          title: "Projects",
          type: "array",
          of: [{ type: "reference", to: [{ type: "project" }] }],
          validation: (Rule: Rule) => Rule.required().length(3),
        },
      ],
    },
    {
      name: "contact",
      title: "Contact Section",
      type: "object",
      fields: [
        {
          name: "header",
          title: "Header",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
  ],
};

export default homepageSchema;
