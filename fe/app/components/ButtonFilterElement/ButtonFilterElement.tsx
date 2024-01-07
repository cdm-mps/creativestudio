"use client";

import clsx from "clsx";
import { ButtonFilterElementProps } from "./ButtonFilterElement.models";

const ButtonFilterElement = ({
  label,
  category,
  isActive = false,
  onClick,
}: ButtonFilterElementProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `border-[1.5px] border-${category} md:px-6 md:py-[10px] font-league-gothic rounded-lg md:text-xl text-base px-5 py-2 md:m-4 m-3`,
        isActive
          ? `bg-${category} text-white`
          : `text-white hover:text-${category}`
      )}
    >
      {label?.toUpperCase()}
    </button>
  );
};

export default ButtonFilterElement;
