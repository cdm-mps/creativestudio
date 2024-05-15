"use client";

import {
  CategoryElementWithDescriptionProps,
  CategoryElementWithoutDescriptionProps,
} from "@/app/components/CategoryElement/CategoryElement.models";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const CategoryElement = (
  props:
    | CategoryElementWithDescriptionProps
    | CategoryElementWithoutDescriptionProps,
) => {
  const t = useTranslations("Categories");
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      className={clsx(
        `flex cursor-pointer flex-col items-center justify-center bg-${props.category} text-center lg:hover:z-10 lg:hover:scale-110`,
        props.size === "small" &&
          "h-[80px] w-[80px] gap-1 lg:h-[137px] lg:w-[137px]",
        props.size == "medium" && !isHover && "lg:group-hover:opacity-50",
        props.size === "medium" &&
          "h-[320px] w-full gap-4 p-6 lg:h-[420px] lg:w-1/3",
      )}
      href={
        props.category === "businessWorkshops"
          ? "business-workshops"
          : `creative-workshops/${props.category}`
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p
        className={clsx(
          "font-league-gothic uppercase",
          props.size === "small" && "text-xs lg:text-2xl",
          props.size === "medium" && "text-3xl max-xl:break-all lg:text-7xl",
        )}
      >
        {t(props.category)}
      </p>
      {categoriesDictionary[props.category](
        clsx(
          props.size === "small" && "h-3 lg:h-7",
          props.size === "medium" && "h-6 lg:h-14",
        ),
      )}

      <div
        className={clsx(
          "flex flex-col items-center gap-4",
          props.size === "small" && "hidden",
          props.size === "medium" && (isHover ? "block" : "block lg:hidden"),
        )}
      >
        <p className="line-clamp-4 text-sm lg:text-base">
          {(props as CategoryElementWithDescriptionProps).description}
        </p>
        <RoundArrowButton arrowDirection="right" size="medium" />
      </div>
    </Link>
  );
};

export default CategoryElement;
