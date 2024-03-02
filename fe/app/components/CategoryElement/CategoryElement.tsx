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
    <Link
      className={clsx("relative", showDescription && "z-50")}
      href={
        category === "businessWorkshops"
          ? "business-workshops"
          : `creative-workshops/${category}`
      }
    >
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className={clsx(
          `cursor-pointer p-3 md:hover:scale-110 bg-${category} flex flex-col items-center justify-center gap-3 md:gap-4`,
          isDeactivated && "md:opacity-50",
          size === "medium"
            ? "h-[200px] w-[250px] md:h-[423px] md:w-[423px]"
            : "h-[200px] w-[250px] md:h-[137px] md:w-[137px]",
        )}
      >
        <p
          className={clsx(
            "text-center font-league-gothic uppercase",
            isDeactivated && "md:opacity-50",
            size === "medium" ? "text-2xl md:text-7xl" : "text-sm md:text-xl",
          )}
        >
          {t(category)}
        </p>
        <div className="text-white">
          {categoriesDictionary[category](
            clsx(
              "h-6 md:h-14",
              isDeactivated && "md:opacity-50",
              size === "medium" ? "h-6 md:h-14" : "h-3 md:h-7",
            ),
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
    </Link>
  );
};

export default CategoryElement;
