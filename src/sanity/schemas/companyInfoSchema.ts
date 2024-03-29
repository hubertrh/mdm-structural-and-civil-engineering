import { Rule } from "sanity";

const companyInfoSchema = {
  name: "companyInfo",
  title: "Company Information",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "nameNarrow",
      title: "Name Narrow",
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
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/^\+44\s0\d{4}\s\d{6}$/, {
            name: "UK phone number",
          })
          .error("Phone number must be in the format: +44 0xxxx xxxxxx"),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "addressNarrow",
      title: "Address Narrow",
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
    {
      name: "googleMapsLink",
      title: "Google Maps Link",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default companyInfoSchema;
