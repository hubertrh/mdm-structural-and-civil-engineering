"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageAsset } from "sanity";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import LightboxImage from "./LightboxImage";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

type ProjectImagesGridProps = {
  images: {
    url: ImageAsset["url"];
    metadata: {
      lqip: ImageAsset["metadata"]["lqip"];
      aspectRatio: ImageAsset["metadata"]["aspectRatio"];
      width: ImageAsset["metadata"]["width"];
      height: ImageAsset["metadata"]["height"];
    };
  }[];
  projectName: string;
};

export default function ProjectImagesGrid({
  images,
  projectName,
}: ProjectImagesGridProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((image) => ({
    src: image.url,
    width: image.metadata.width as number,
    height: image.metadata.height as number,
  }));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            className={`relative aspect-video w-full cursor-pointer md:!aspect-square`}
            style={{ aspectRatio: `${image.metadata.aspectRatio}/1` }}
            key={index}
            onClick={() => setIndex(index)}
          >
            <Image
              className="w-full object-contain md:object-cover"
              src={image.url}
              alt={`${projectName} — image ${index + 1}`}
              fill
              priority
              sizes="(min-width: 768px) 30vw, 95vw"
              placeholder="blur"
              blurDataURL={image.metadata.lqip}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        styles={{
          container: { backgroundColor: "hsla(0, 0%, 100%, 0.75)" },
          button: { color: "#70916C", filter: "none" },
        }}
        slides={slides}
        render={{ slide: LightboxImage }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        carousel={{
          preload: 2,
          padding: "5%",
          spacing: "0%",
        }}
        animation={{ fade: 200, swipe: 0 }}
        plugins={[Counter]}
        counter={{
          container: {
            style: {
              color: "#70916C",
              filter: "none",
              left: "50%",
              translate: "-50%",
            },
          },
        }}
      />
    </>
  );
}
