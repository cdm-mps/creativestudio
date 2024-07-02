import React from "react";
import { MentorsGroupProps } from "./MentorsGroup.models";
import ImageElement from "@components/ImageElement/ImageElement";
import clsx from "clsx";

const MentorsGroup = ({
  mentors,
  size,
  category,
  disabled,
  type = "primary",
}: MentorsGroupProps) => {
  return (
    <div className="my-2 flex items-center gap-[1px]">
      {mentors.slice(0, 3).map((mentor, i) => (
        <label key={i} title={mentor.alt}>
          <ImageElement
            {...mentor}
            className={clsx(
              size === "large" && `h-6 w-6 md:h-16 md:w-16`,
              size === "small" && `h-4 w-4 md:h-8 md:w-8`,
              disabled && "grayscale",
            )}
            rounded
          />
        </label>
      ))}
      {mentors.length > 3 && (
        <div
          className={clsx(
            `flex items-center justify-center bg-${type === "primary" ? category : "white"} rounded-[50%] font-league-gothic`,
            type === "secondary" && `text-${category}`,
            size === "large" && `h-6 w-6 text-xs md:h-16 md:w-16 md:text-2xl`,
            size === "small" && `h-4 w-4 text-[8px] md:h-8 md:w-8 md:text-sm`,
          )}
        >
          +{mentors.slice(3, mentors.length).length}
        </div>
      )}
    </div>
  );
};

export default MentorsGroup;
