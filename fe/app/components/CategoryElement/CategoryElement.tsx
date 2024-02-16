"use client";

import { CategoryElementProps } from "@/app/components/CategoryElement/CategoryElement.models";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import clsx from "clsx";
import Link from "next/link";
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
          `cursor-pointer p-3 md:hover:scale-110 bg-${category} flex h-[200px] w-[250px] flex-col items-center justify-center gap-3 md:h-[423px] md:w-[423px] md:gap-4`,
          isDeactivated && "md:opacity-50",
        )}
      >
        <p
          className={clsx(
            "text-center font-league-gothic text-2xl uppercase md:text-7xl",
            isDeactivated && "md:opacity-50",
          )}
        >
          {category.replace("-", " ")}
        </p>
        <div className="text-white">
          {categoriesDictionary[category](
            clsx("h-6 md:h-14", isDeactivated && "md:opacity-50"),
          )}
        </div>

        {showDescription && description && (
          <div className="max-md:hidden">
            <div
              className={clsx(
                "flex flex-col items-center justify-center gap-3 md:gap-4",
              )}
            >
              <p className="line-clamp-4 text-center text-xs text-white md:text-base">
                {description}
              </p>
              <RoundArrowButton arrowDirection="right" size="medium" />
            </div>
          </div>
        )}
        {description && (
          <div className="md:hidden">
            <div
              className={clsx(
                "flex flex-col items-center justify-center gap-3 md:gap-6",
              )}
            >
              <p className="line-clamp-4 text-center text-xs text-white md:text-sm">
                {description}
              </p>
              <RoundArrowButton arrowDirection="right" size="small" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryElement;
