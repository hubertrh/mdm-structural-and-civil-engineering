import { ImageAsset } from "sanity";

export type ServicesPageInfo = {
  header: string;
  paragraphs: string[];
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
};
