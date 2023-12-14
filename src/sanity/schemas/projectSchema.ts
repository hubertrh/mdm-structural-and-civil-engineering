const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g., London",
    },
    {
      name: "completionDate",
      title: "Completion Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default projectSchema;
