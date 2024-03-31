import { StructureBuilder } from "sanity/structure";

const singletonDocuments = {
  companyInfo: {
    title: "Company Information",
    documentId: "465a4104-59be-4551-b9f8-724c32761bad",
    schemaType: "companyInfo",
    description:
      "Company Information across all the pages. Re-deployment required.",
  },
  homePage: {
    title: "Home Page",
    documentId: "54ba75db-6294-43b9-933b-2ac7b0e9ec1d",
    schemaType: "homePage",
    description: "Homepage content. Re-deployment required.",
  },
  servicesPage: {
    title: "Services Page",
    documentId: "5970fea5-61b7-4d44-a1e6-0ee7068cbb98",
    schemaType: "servicesPage",
    description: "Services Page content. Re-deployment required.",
  },
  aboutPage: {
    title: "About Page",
    documentId: "8ba7dffb-6c12-4e0a-92d4-4be15508c966",
    schemaType: "aboutPage",
    description: "About Page content. Re-deployment required.",
  },
  contactPage: {
    title: "Contact Page",
    documentId: "3ae4e81d-2ba7-4dac-ab2f-d822f66e6184",
    schemaType: "contactPage",
    description: "Contact Page content. Re-deployment required.",
  },
};

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      ...Object.values(singletonDocuments).map((doc) =>
        S.listItem()
          .title(doc.title)
          .child(
            S.document()
              .title(doc.description)
              .schemaType(doc.schemaType)
              .documentId(doc.documentId),
          ),
      ),
      S.listItem()
        .title("Projects Page")
        .child(
          S.list()
            .title("Projects Page")
            .items([
              S.listItem()
                .title("Projects")
                .child(S.documentTypeList("project").title("Projects")),
              S.listItem()
                .title("Project Categories")
                .child(
                  S.documentTypeList("category").title("Project Categories"),
                ),
            ]),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "companyInfo",
            "homePage",
            "servicesPage",
            "aboutPage",
            "contactPage",
            "project",
            "category",
          ].includes(listItem.getId() ?? ""),
      ),
    ]);
