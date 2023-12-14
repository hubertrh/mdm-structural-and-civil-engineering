import { Rule } from "sanity";

const aboutSchema = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "paragraphs",
      title: "Main Paragraphs",
      type: "array",
      of: [{ type: "paragraphObject" }],
      validation: (Rule: Rule) => Rule.required().min(1).max(3),
    },
    {
      name: "team",
      title: "Team",
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
    {
      name: "vision",
      title: "Vision",
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
    {
      name: "trackRecord",
      title: "Track Record",
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
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
      ],
    },
  ],
};

export default aboutSchema;
