import ImageElement from "@components/ImageElement/ImageElement";
import { ImageProps } from "@components/ImageElement/ImageElement.models";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import clsx from "clsx";
import React from "react";

const CategoryCard = ({
  title,
  subtitle,
  image,
  subCategories,
  disabled,
}: {
  title: string;
  subtitle: string;
  image: ImageProps;
  subCategories?: string[];
  disabled?: boolean;
}) => {
  return (
    <div
      className={clsx(
        `flex items-center justify-between p-5 `,
        disabled
          ? "opacity-50"
          : "cursor-pointer group hover:bg-businessWorkshops-opacity"
      )}
    >
      <div className="flex flex-col py-11 pl-11 max-w-[700px]">
        <div className="flex items-center">
          <span className="pr-10 font-league-gothic text-6xl group-hover:underline">
            {title}
          </span>
          <div className="hidden group-hover:block">
            <RoundArrowButton arrowDirection="right" />
          </div>
        </div>
        <span className="pt-7 font-noto-sans">{subtitle}</span>
        <div className="mt-12 flex flex-wrap gap-5">
          {subCategories?.map((subCategory) => (
            <span className="font-league-gothic text-5xl uppercase">
              {subCategory}
            </span>
          ))}
        </div>
      </div>
      <div className="mr-11">
        <ImageElement {...image} className="h-[307px] w-[439px] grayscale" />
      </div>
    </div>
  );
};

export default CategoryCard;
