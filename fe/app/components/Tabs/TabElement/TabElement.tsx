import React from "react";
import { TabElementProps } from "./TabElement.models";
import clsx from "clsx";
import { IoPlayOutline } from "react-icons/io5";

const TabElement = ({
  label,
  category,
  selected,
  className,
  onClick,
}: TabElementProps) => {
  return (
    <div className="group flex items-center">
      <IoPlayOutline
        size={32}
        className={clsx(
          `text-${category} `,
          selected ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />
      <span
        className={clsx(
          `cursor-pointer px-5 py-2 text-center font-league-gothic
          text-xs uppercase md:px-4 md:py-[10px] md:text-2xl lg:text-5xl ${className}`,
          selected && `text-${category}`,
        )}
        onClick={onClick}
      >
        {label}
      </span>
    </div>
  );
};

export default TabElement;
