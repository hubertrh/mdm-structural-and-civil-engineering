import { Rule } from "sanity";

const aboutSchema = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Intro Section",
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
          title: "Description (paragraphs)",
          type: "array",
          of: [
            {
              type: "text",
              rows: 5,
              validation: (Rule: Rule) =>
                Rule.regex(/[\r\n]/, {
                  name: "new line",
                  invert: true,
                }).error(
                  "Text cannot contain new lines. Please create a new paragraph instead.",
                ),
            },
          ],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
      ],
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
    {
      name: "vision",
      title: "Vision",
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
    {
      name: "trackRecord",
      title: "Track Record",
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
        {
          name: "paragraphs",
          title: "Description (paragraphs)",
          type: "array",
          of: [
            {
              type: "text",
              rows: 5,
              validation: (Rule: Rule) =>
                Rule.regex(/[\r\n]/, {
                  name: "new line",
                  invert: true,
                }).error(
                  "Text cannot contain new lines. Please create a new paragraph instead.",
                ),
            },
          ],
          validation: (Rule: Rule) => Rule.required().min(1).max(3),
        },
      ],
    },
  ],
};

export default aboutSchema;
