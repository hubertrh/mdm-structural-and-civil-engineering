import { Rule } from "sanity";

const servicesSchema = {
  name: "servicesPage",
  title: "Services Page",
  type: "document",
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
              name: "shortDescription",
              title: "Short Description",
              type: "text",
              rows: 5,
              validation: (Rule: Rule) =>
                Rule.required()
                  .regex(/[\r\n]/, {
                    name: "new line",
                    invert: true,
                  })
                  .error("Text cannot contain new lines."),
            },
            {
              name: "paragraphs",
              title: "Description (paragraphs)",
              type: "array",
              of: [
                {
                  type: "text",
                  rows: 5,
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
              validation: (Rule: Rule) => Rule.required().min(1).max(3),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required().length(3),
    },
    {
      name: "domainList",
      title: "Domains",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "shortDescription",
              title: "Short Description",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};

export default servicesSchema;
