import { Rule } from "sanity";

const contactSchema = {
  name: "contactPage",
  title: "Contact Page",
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
  ],
};

export default contactSchema;
