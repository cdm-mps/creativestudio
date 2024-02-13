import clsx from "clsx";
import { HeaderProps } from "./Header.models";

export const Header = ({ highlight, description }: HeaderProps) => (
  <div className="flex flex-col py-14">
    {highlight && (
      <div className="font-lato italic text-[32px]">{highlight}</div>
    )}
    <div
      className={clsx(
        "font-lato text-xl whitespace-pre-line",
        highlight && "pt-12"
      )}
    >
      {description}
    </div>
  </div>
);
