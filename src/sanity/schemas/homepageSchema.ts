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
        },
        {
          name: "header2",
          title: "Header 2",
          type: "string",
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
          of: [{ type: "text" }],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
        {
          name: "slogan",
          title: "Slogan",
          type: "string",
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
        },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
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
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
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
        },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
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
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
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
        },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
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
        },
      ],
    },
  ],
};

export default homepageSchema;
