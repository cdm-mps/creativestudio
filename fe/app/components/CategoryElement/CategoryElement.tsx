"use client";

import { CategoryElementProps } from "@/app/components/CategoryElement/CategoryElement.models";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import clsx from "clsx";
import { useState } from "react";

const CategoryElement = ({
  category,
  description,
  isDisabled = false,
}: CategoryElementProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const isDeactivated = isDisabled && !showDescription;

  return (
    <div className={clsx("relative", showDescription && "z-50")}>
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className={clsx(
          `p-3 md:hover:scale-110 cursor-pointer bg-${category} md:w-[240px] md:h-[240px] w-[250px] h-[200px] flex flex-col items-center justify-center md:gap-4 gap-3`,
          isDeactivated && "md:opacity-50"
        )}
      >
        <p
          className={clsx(
            "font-league-gothic text-2xl md:text-4xl text-white",
            isDeactivated && "md:opacity-50"
          )}
        >
          {category.toUpperCase()}
        </p>
        <div className="text-white">
          {categoriesDictionary[category](
            clsx("h-6 md:h-8", isDeactivated && "md:opacity-50")
          )}
        </div>

        {showDescription && description && (
          <div className="max-md:hidden">
            <div
              className={clsx(
                "flex flex-col justify-center items-center md:gap-4 gap-3"
              )}
            >
              <p className="text-center text-xs text-white line-clamp-4">
                {description}
              </p>
              <RoundArrowButton arrowDirection="down" size="small" />
            </div>
          </div>
        )}
        {description && (
          <div className="md:hidden">
            <div
              className={clsx(
                "flex flex-col justify-center items-center md:gap-6 gap-3"
              )}
            >
              <p className="text-center md:text-sm text-xs text-white line-clamp-4">
                {description}
              </p>
              <RoundArrowButton arrowDirection="down" size="small" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryElement;
