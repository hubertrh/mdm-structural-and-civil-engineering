import { ImageAsset } from "sanity";

export type Project = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  location: string;
  completionDate: Date;
  description: string[];
  images: {
    url: ImageAsset["url"];
    metadata: {
      lqip: ImageAsset["metadata"]["lqip"];
      aspectRatio: ImageAsset["metadata"]["aspectRatio"];
      width: ImageAsset["metadata"]["width"];
      height: ImageAsset["metadata"]["height"];
    };
  }[];
};
