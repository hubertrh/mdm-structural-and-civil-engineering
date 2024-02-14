// @ts-nocheck

import { StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Company Information")
        .child(
          S.document()
            .title("Company Information across all the pages")
            .schemaType("companyInfo")
            .documentId("465a4104-59be-4551-b9f8-724c32761bad"),
          S.documentTypeListItems().filter(
            (listItem) =>
              !["465a4104-59be-4551-b9f8-724c32761bad"].includes(
                listItem.getId(),
              ),
          ),
        ),
      S.listItem()
        .title("Homepage")
        .child(
          S.document()
            .title("Homepage content")
            .schemaType("homePage")
            .documentId("54ba75db-6294-43b9-933b-2ac7b0e9ec1d"),
          S.documentTypeListItems().filter(
            (listItem) =>
              !["54ba75db-6294-43b9-933b-2ac7b0e9ec1d"].includes(
                listItem.getId(),
              ),
          ),
        ),
      S.listItem()
        .title("Services Page")
        .child(
          S.document()
            .title("Services Page content")
            .schemaType("servicesPage")
            .documentId("5970fea5-61b7-4d44-a1e6-0ee7068cbb98"),
          S.documentTypeListItems().filter(
            (listItem) =>
              !["5970fea5-61b7-4d44-a1e6-0ee7068cbb98"].includes(
                listItem.getId(),
              ),
          ),
        ),
      S.listItem()
        .title("About Page")
        .child(
          S.document()
            .title("About Page content")
            .schemaType("aboutPage")
            .documentId("8ba7dffb-6c12-4e0a-92d4-4be15508c966"),
          S.documentTypeListItems().filter(
            (listItem) =>
              !["8ba7dffb-6c12-4e0a-92d4-4be15508c966"].includes(
                listItem.getId(),
              ),
          ),
        ),
      S.listItem()
        .title("Contact Page")
        .child(
          S.document()
            .title("Contact Page content")
            .schemaType("contactPage")
            .documentId("3ae4e81d-2ba7-4dac-ab2f-d822f66e6184"),
          S.documentTypeListItems().filter(
            (listItem) =>
              !["3ae4e81d-2ba7-4dac-ab2f-d822f66e6184"].includes(
                listItem.getId(),
              ),
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
    ]);
