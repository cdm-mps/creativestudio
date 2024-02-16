"use client";

import { ButtonFilterElementProps } from "@components/ButtonFilterElement/ButtonFilterElement.models";
import clsx from "clsx";

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
        `border-[1.5px] border-${category} m-3 rounded-lg px-5 py-2 font-league-gothic text-base md:m-4 md:px-6 md:py-[10px] md:text-xl`,
        isActive
          ? `bg-${category} text-white`
          : `text-white hover:text-${category}`,
      )}
    >
      {label?.toUpperCase()}
    </button>
  );
};

export default ButtonFilterElement;
