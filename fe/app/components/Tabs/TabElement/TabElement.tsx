import React from "react";
import { TabElementProps } from "./TabElement.models";
import clsx from "clsx";

const TabElement = ({
  label,
  category,
  selected,
  className,
  onClick,
}: TabElementProps) => {
  return (
    <span
      className={clsx(
        `cursor-pointer border-[1.5px] text-center font-league-gothic text-xs uppercase
         hover:opacity-80 hover:border-${category} rounded-lg border-transparent px-5 py-2 md:px-6 md:py-[10px] md:text-2xl lg:text-5xl ${className}`,
        selected && `text-${category}`,
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default TabElement;
