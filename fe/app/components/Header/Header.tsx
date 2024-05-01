import clsx from "clsx";
import { HeaderProps } from "./Header.models";
import ImageElement from "@components/ImageElement/ImageElement";

export const Header = ({ highlight, description, image }: HeaderProps) => (
  <div className="flex w-full gap-20 py-14">
    <div className={clsx(image ? "w-[60%] " : "w-full")}>
      {highlight && (
        <div className="font-league-gothic italic md:text-2xl lg:text-5xl">
          {highlight}
        </div>
      )}
      <div
        className={clsx(
          "whitespace-pre-line text-justify font-noto-sans text-lg",

          highlight && "pt-12",
        )}
      >
        {description}
      </div>
    </div>

    {image && (
      <div className="flex h-[500px] w-[40%] justify-center ">
        <ImageElement {...image} className={clsx("w-full")} />
      </div>
    )}
  </div>
);
