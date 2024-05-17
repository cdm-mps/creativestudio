import clsx from "clsx";
import { TagProps } from "./Tag.models";

export const Tag = ({ label, category, size }: TagProps) => {
  return (
    <div
      className={clsx(
        `flex h-fit w-fit rounded-lg border-2 p-2`,
        category ? `border-${category}` : "border-white",
      )}
    >
      <span
        className={clsx(
          `font-league-gothic uppercase text-${category}`,
          category ? `text-${category}` : "text-white",
          size === "small" && "text-sm md:text-xl",
          size === "large" && "text-xl md:text-4xl",
        )}
      >
        {label}
      </span>
    </div>
  );
};
