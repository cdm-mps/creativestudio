"use client";

import { useState } from "react";
import { ButtonFilterElementProps } from "./ButtonFilterElement.models";
import clsx from "clsx";

const ButtonFilterElement = ({ label, category }: ButtonFilterElementProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <button
      onClick={() => setIsSelected(!isSelected)}
      className={clsx(
        `border-[1.5px] border-${category} md:px-6 md:py-[10px] font-league-gothic rounded-lg md:text-xl text-base px-5 py-2 md:m-6 m-5`,
        isSelected
          ? `bg-${category} text-white`
          : `text-white hover:text-${category}`
      )}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default ButtonFilterElement;
