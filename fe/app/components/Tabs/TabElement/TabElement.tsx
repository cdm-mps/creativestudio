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
          `text-${category} max-md:hidden`,
          selected ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />
      <IoPlayOutline
        size={16}
        className={clsx(
          `text-${category} md:hidden`,
          selected ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />
      <span
        className={clsx(
          `cursor-pointer px-2 py-2 text-center font-league-gothic
          uppercase md:px-4 md:py-[10px] md:text-2xl lg:text-5xl ${className}`,
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
