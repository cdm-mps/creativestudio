import clsx from "clsx";
import { HeaderProps } from "./Header.models";
import ImageElement from "@components/ImageElement/ImageElement";

export const Header = ({ highlight, description, image }: HeaderProps) => (
  <div className="mb-5 flex w-full gap-10 max-md:flex-col md:gap-20 md:py-14">
    <div className={clsx(image ? "md:w-[60%]" : "w-full")}>
      {highlight && (
        <div className="font-league-gothic text-xl italic max-md:mt-6 md:text-2xl lg:text-5xl">
          {highlight}
        </div>
      )}
      <div
        className={clsx(
          "whitespace-pre-line text-justify font-noto-sans text-sm md:text-lg",
          highlight && "pt-6 md:pt-12",
        )}
      >
        {description}
      </div>
    </div>

    {image && (
      <div className="flex h-[200px] justify-center md:h-[500px] md:w-[40%] ">
        <ImageElement {...image} className={clsx("w-full")} />
      </div>
    )}
  </div>
);
