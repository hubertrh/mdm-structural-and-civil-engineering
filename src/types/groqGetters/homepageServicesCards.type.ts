import { ImageAsset } from "sanity";

export type HomepageServicesCards = {
  title: string;
  description: string;
  image: {
    url: ImageAsset["url"];
    metadata: {
      lqip: ImageAsset["metadata"]["lqip"];
    };
  };
}[];
