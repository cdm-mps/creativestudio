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
        `text-xs text-center md:text-2xl lg:text-5xl uppercase font-league-gothic cursor-pointer hover:opacity-80 ${className}`,
        selected && `text-${category}`
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default TabElement;
