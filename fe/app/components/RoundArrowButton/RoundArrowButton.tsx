import React from "react";
import clsx from "clsx";
import { StickHead } from "@icons/StickHead";
import { RoundArrowButtonProps } from "./RoundArrowButton.models";

const RoundArrowButton = ({
  arrowDirection,
  onClick,
}: RoundArrowButtonProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-[25px] h-[25px] md:w-[45px] md:h-[45px] border-[1px] md:border-2 border-white rounded-full",
        onClick && "cursor-pointer hover:opacity-80"
      )}
      onClick={onClick}
    >
      {arrowDirection === "up" && (
        <StickHead className={"w-2 h-2 md:w-4 md:h-4 rotate-180"} />
      )}
      {arrowDirection === "down" && (
        <StickHead className={"w-2 h-2 md:w-4 md:h-4 md:pt-1"} />
      )}
      {arrowDirection === "left" && (
        <StickHead className={"w-2 h-2 md:w-4 md:h-4 rotate-90 pt-[1px]"} />
      )}
      {arrowDirection === "right" && (
        <StickHead className={"w-2 h-2 md:w-4 md:h-4 -rotate-90 pt-[1px]"} />
      )}
    </div>
  );
};

export default RoundArrowButton;
