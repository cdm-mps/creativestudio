"use client";

import { CategoryElementProps } from "@/app/components/CategoryElement/CategoryElement.models";
import { RoundArrow } from "@icons/RoundArrow";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useState } from "react";

const CategoryElement = ({ category, description }: CategoryElementProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      className={`p-3 hover:scale-110 cursor-pointer bg-${category} w-[120px] sm:w-[350px] sm:h-[350px] flex flex-col items-center justify-center sm:gap-6`}
    >
      <p className="font-league-gothic text-2xl sm:text-5xl text-white">
        {category.toUpperCase()}
      </p>
      <div className="text-white">
        {categoriesDictionary[category]("max-sm:h-6")}
      </div>
      {showDescription && description && (
        <div>
          <p className="text-center text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet
          </p>
          <RoundArrow />
        </div>
      )}
    </div>
  );
};

export default CategoryElement;
