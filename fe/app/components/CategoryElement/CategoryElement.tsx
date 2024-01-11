"use client";

import { CategoryElementProps } from "@/app/components/CategoryElement/CategoryElement.models";
import { RoundArrow } from "@icons/RoundArrow";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useState } from "react";

const CategoryElement = ({
  category,
  description,
  isDisabled = false,
}: CategoryElementProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  return (
    <div className="relative">
      {isDisabled && <div className="absolute w-full h-full bg-black/50" />}
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className={`p-3 hover:scale-110 cursor-pointer bg-${category} w-[120px] md:w-[350px] md:h-[350px] flex flex-col items-center justify-center md:gap-6`}
      >
        <p className="font-league-gothic text-2xl md:text-5xl text-white">
          {category.toUpperCase()}
        </p>
        <div className="text-white">
          {categoriesDictionary[category]("max-md:h-6")}
        </div>
        {showDescription && description && (
          <div className="flex flex-col justify-center items-center md:gap-6">
            <p className="text-center text-sm text-white line-clamp-4">
              {description}
            </p>
            <RoundArrow />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryElement;
