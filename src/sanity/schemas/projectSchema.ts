import { Rule } from "sanity";

const projectSchema = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      description: "Select the project category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g., London, UK",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "completionDate",
      title: "Completion Date",
      type: "date",
      description:
        "Select any day from the picker — only the month and year will be displayed",
      options: {
        dateFormat: "MM/YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 7 }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      description: "The first image will serve as the thumbnail",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default projectSchema;
