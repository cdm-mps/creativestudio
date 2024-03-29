import clsx from "clsx";
import { HeaderProps } from "./Header.models";

export const Header = ({ highlight, description }: HeaderProps) => (
  <div className="flex flex-col py-14">
    {highlight && (
      <div className="font-noto-sans text-[28px] italic">{highlight}</div>
    )}
    <div
      className={clsx(
        "whitespace-pre-line font-noto-sans text-lg",
        highlight && "pt-12",
      )}
    >
      {description}
    </div>
  </div>
);
