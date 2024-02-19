import ImageElement from "../ImageElement/ImageElement";
import { BannerGridProps } from "./BannerGrid.models";
import { bannerGridImages } from "./BannerGridContent";

const BannerGrid = () => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="flex min-w-max animate-autoplay-infinite items-center justify-center gap-3 overflow-hidden">
        <BannerGridContent images={bannerGridImages} />
      </div>
      <div className="ml-3 flex min-w-max animate-autoplay-infinite items-center justify-end gap-3 overflow-hidden">
        <BannerGridContent images={bannerGridImages} />
      </div>
      <div className="absolute flex h-full w-full items-center bg-banner-gradient p-9 md:p-12">
        <div className="whitespace-pre-line font-league-gothic text-4xl uppercase text-white md:text-7xl">
          {"Create your own art by\n exchanging ideas with\n other artists"}
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
            className="h-[98.5px] w-[150px] overflow-hidden rounded-lg md:h-[197px] md:w-[300px]"
          />
        ))}
    </div>
    <div className="mt-3 flex gap-3">
      {images
        .filter((_e, i) => i % 2 !== 0)
        .map((e, i) => (
          <ImageElement
            key={i}
            src={e.src}
            alt={e.alt}
            objectPosition={e.objectPosition}
            className="h-[98.5px] w-[150px] overflow-hidden rounded-lg md:h-[197px] md:w-[300px]"
          />
        ))}
    </div>
  </div>
);

export default BannerGrid;
