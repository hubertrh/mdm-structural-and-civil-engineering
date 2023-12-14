import { Rule } from "sanity";

const paragraphObjectSchema = {
  title: "Paragraph",
  name: "paragraphObject",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
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
};

export default paragraphObjectSchema;
