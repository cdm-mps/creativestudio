import clsx from "clsx";
import { HeaderProps } from "./Header.models";
import ImageElement from "@components/ImageElement/ImageElement";

export const Header = ({ highlight, description, image }: HeaderProps) => (
  <div className="flex max-md:flex-col w-full md:gap-20 gap-10 md:py-14 mb-5">
    <div className={clsx(image ? "md:w-[60%]" : "w-full")}>
      {highlight && (
        <div className="font-league-gothic italic max-md:mt-6 text-xl md:text-2xl lg:text-5xl">
          {highlight}
        </div>
      )}
      <div
        className={clsx(
          "whitespace-pre-line text-justify font-noto-sans text-sm md:text-lg",
          highlight && "md:pt-12 pt-6",
        )}
      >
        {description}
      </div>
    </div>

    {image && (
      <div className="flex md:h-[500px] h-[200px] md:w-[40%] justify-center ">
        <ImageElement {...image} className={clsx("w-full")} />
      </div>
    )}
  </div>
);
