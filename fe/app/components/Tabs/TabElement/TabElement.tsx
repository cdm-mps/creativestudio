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
        `cursor-pointer text-center font-league-gothic text-xs uppercase hover:opacity-80 md:text-2xl lg:text-5xl ${className}`,
        selected && `text-${category}`,
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default TabElement;
