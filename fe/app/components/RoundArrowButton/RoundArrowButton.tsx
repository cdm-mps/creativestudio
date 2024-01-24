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
        "flex items-center justify-center border-[1px] md:border-2 border-white rounded-full",
        onClick && "cursor-pointer hover:opacity-80",
        size === "medium" && "w-[25px] h-[25px] md:w-[45px] md:h-[45px]",
        size === "small" && "w-[25px] h-[25px] md:w-7 md:h-7"
      )}
      onClick={onClick}
    >
      {arrowDirection === "up" && (
        <StickHead
          className={clsx(
            "rotate-180",
            size === "medium" && "md:w-4 md:h-4",
            size === "small" && "md:w-3 md:h-3"
          )}
        />
      )}
      {arrowDirection === "down" && (
        <StickHead
          className={clsx(
            size === "medium" && "md:pt-1 w-2 h-2 md:w-4 md:h-4",
            size === "small" && "md:pt-0.5 md:w-3 md:h-3"
          )}
        />
      )}
      {arrowDirection === "left" && (
        <StickHead
          className={clsx(
            "rotate-90 pt-[1px]",
            size === "medium" && "md:w-4 md:h-4",
            size === "small" && "md:w-3 md:h-3"
          )}
        />
      )}
      {arrowDirection === "right" && (
        <StickHead
          className={clsx(
            "w-2 h-2 -rotate-90 pt-[1px]",
            size === "medium" && "md:w-4 md:h-4",
            size === "small" && "md:w-3 md:h-3"
          )}
        />
      )}
    </div>
  );
};

export default RoundArrowButton;
