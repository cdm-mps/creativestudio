"use client";

import { CategoryElementProps } from "@/app/components/CategoryElement/CategoryElement.models";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const CategoryElement = ({
  category,
  description,
  isDisabled = false,
  size = "medium",
}: CategoryElementProps) => {
  const t = useTranslations("Categories");
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const isDeactivated = isDisabled && !showDescription;

  return (
    <div className={clsx("relative", showDescription && "z-50")}>
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className={clsx(
          `p-3 md:hover:scale-110 cursor-pointer bg-${category} flex flex-col items-center justify-center md:gap-4 gap-3`,
          isDeactivated && "md:opacity-50",
          size === "medium"
            ? "md:w-[423px] md:h-[423px] w-[250px] h-[200px]"
            : "md:w-[137px] md:h-[137px] w-[250px] h-[200px]"
        )}
      >
        <p
          className={clsx(
            "font-league-gothic text-center",
            isDeactivated && "md:opacity-50",
            size === "medium"
              ? "text-2xl md:text-7xl uppercase"
              : "text-sm md:text-base lowercase font-noto-sans"
          )}
        >
          {t(category)}
        </p>
        <div className="text-white">
          {categoriesDictionary[category](
            clsx(
              "h-6 md:h-14",
              isDeactivated && "md:opacity-50",
              size === "medium" ? "h-6 md:h-14" : "h-3 md:h-7"
            )
          )}
        </div>

        {showDescription && description && (
          <div className="max-md:hidden">
            <div
              className={clsx(
                "flex flex-col justify-center items-center md:gap-4 gap-3"
              )}
            >
              <p className="text-center text-xs md:text-base text-white line-clamp-4">
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
                "flex flex-col justify-center items-center md:gap-6 gap-3"
              )}
            >
              <p className="text-center md:text-sm text-xs text-white line-clamp-4">
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
