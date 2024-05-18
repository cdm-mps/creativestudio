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
        `flex items-center justify-between  p-5 max-md:flex-col `,
        disabled
          ? "opacity-50"
          : "group cursor-pointer hover:bg-businessWorkshops-opacity",
      )}
    >
      <div className="flex w-fit md:max-w-[700px] flex-col  py-4 md:py-11 md:pl-11">
        <div className="flex items-center">
          <span className="pr-10 font-league-gothic text-2xl md:text-6xl group-hover:underline">
            {title}
          </span>
          <div className="hidden group-hover:block">
            <RoundArrowButton arrowDirection="right" />
          </div>
        </div>
        <span className="pt-7 font-noto-sans max-md:text-sm">{subtitle}</span>
        <div className="mt-6 md:mt-12 flex flex-wrap gap-5">
          {subCategories?.map((subCategory) => (
            <span className="font-league-gothic text-xl md:text-5xl uppercase">
              {subCategory}
            </span>
          ))}
        </div>
      </div>
      <div className="md:mr-11 ">
        <ImageElement
          {...image}
          className="h-[153px] grayscale w-[250px] md:h-[307px] md:w-[439px]"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
