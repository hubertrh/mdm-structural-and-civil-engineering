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
      title: "Paragraphs",
      type: "array",
      of: [{ type: "paragraphObject" }],
      validation: (Rule: Rule) => Rule.required().min(1).max(3),
    },
  ],
};

export default contactSchema;
