import React from "react";
import ImageElement from "../ImageElement/ImageElement";
import { BannerGridProps } from "./BannerGrid.models";

const BannerGrid = ({ images }: BannerGridProps) => {
  return (
    <div>
      <div className="flex relative overflow-hidden">
        <div className="flex items-center justify-ceneter min-w-max overflow-hidden gap-3 animate-autoplay-infinite">
          <BannerGridContent images={images} />
        </div>
        <div className="flex items-center justify-end min-w-max overflow-hidden gap-3 animate-autoplay-infinite ml-3">
          <BannerGridContent images={images} />
        </div>
        <div className="flex absolute h-full w-full bg-banner-gradient items-center p-9 md:p-12">
          <div className="font-league-gothic whitespace-pre-line text-white uppercase text-4xl md:text-7xl">
            {"Create your own art by\n exchanging ideas with\n other artists"}
          </div>
        </div>
      </div>
    </div>
  );
};

const BannerGridContent = ({ images }: BannerGridProps) => (
  <div className="flex flex-col">
    <div className="flex gap-3">
      {images
        .filter((_e, i) => i % 2 === 0)
        .map((e, i) => (
          <ImageElement
            key={i}
            src={e.src}
            alt={e.alt}
            objectPosition={e.objectPosition}
            className="rounded-lg overflow-hidden h-[98.5px] w-[150px] md:h-[197px] md:w-[300px]"
          />
        ))}
    </div>
    <div className="flex gap-3 mt-3">
      {images
        .filter((_e, i) => i % 2 !== 0)
        .map((e, i) => (
          <ImageElement
            key={i}
            src={e.src}
            alt={e.alt}
            objectPosition={e.objectPosition}
            className="rounded-lg overflow-hidden h-[98.5px] w-[150px] md:h-[197px] md:w-[300px]"
          />
        ))}
    </div>
  </div>
);

export default BannerGrid;
