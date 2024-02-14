import clsx from "clsx";
import { HeaderProps } from "./Header.models";

export const Header = ({ highlight, description }: HeaderProps) => (
  <div className="flex flex-col py-14">
    {highlight && (
      <div className="font-noto-sans italic text-[28px]">{highlight}</div>
    )}
    <div
      className={clsx(
        "font-noto-sans text-lg whitespace-pre-line",
        highlight && "pt-12"
      )}
    >
      {description}
    </div>
  </div>
);
