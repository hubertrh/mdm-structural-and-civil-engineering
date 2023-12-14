import { ImageAsset } from "sanity";
import { ParagraphObject } from "./paragraphObjectSchema.type";

export type ServicesPageInfo = {
  header: string;
  paragraphs: ParagraphObject[];
};

export type ServicesCards = {
  title: string;
  shortDescription: string;
  paragraphs: string[];
  image: {
    url: ImageAsset["url"];
    metadata: {
      lqip: ImageAsset["metadata"]["lqip"];
    };
  };
}[];
