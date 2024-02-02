import { Rule } from "sanity";

export const projectCategorySchema = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default projectCategorySchema;
