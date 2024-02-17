import React from "react";
import clsx from "clsx";
import { StickHead } from "@icons/StickHead";
import { RoundArrowButtonProps } from "./RoundArrowButton.models";

const RoundArrowButton = ({
  arrowDirection,
  onClick,
  size = "medium",
}: RoundArrowButtonProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full border-[1px] border-white md:border-2",
        onClick && "cursor-pointer hover:opacity-80",
        size === "medium" && "h-[25px] w-[25px] md:h-[45px] md:w-[45px]",
        size === "small" && "h-[25px] w-[25px] md:h-7 md:w-7",
      )}
      onClick={onClick}
    >
      {arrowDirection === "up" && (
        <StickHead
          className={clsx(
            "rotate-180",
            size === "medium" && "md:h-4 md:w-4",
            size === "small" && "md:h-3 md:w-3",
          )}
        />
      )}
      {arrowDirection === "down" && (
        <StickHead
          className={clsx(
            size === "medium" && "h-2 w-2 md:h-4 md:w-4 md:pt-1",
            size === "small" && "md:h-3 md:w-3 md:pt-0.5",
          )}
        />
      )}
      {arrowDirection === "left" && (
        <StickHead
          className={clsx(
            "rotate-90 pt-[1px]",
            size === "medium" && "md:h-4 md:w-4",
            size === "small" && "md:h-3 md:w-3",
          )}
        />
      )}
      {arrowDirection === "right" && (
        <StickHead
          className={clsx(
            "h-2 w-2 -rotate-90 pt-[1px]",
            size === "medium" && "md:h-4 md:w-4",
            size === "small" && "md:h-3 md:w-3",
          )}
        />
      )}
    </div>
  );
};

export default RoundArrowButton;
