import ImageElement from "@components/ImageElement/ImageElement";
import { ImageProps } from "@components/ImageElement/ImageElement.models";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import React from "react";

const CategoryCard = ({
  title,
  subtitle,
  image,
  subCategories,
}: {
  title: string;
  subtitle: string;
  image: ImageProps;
  subCategories?: string[];
}) => {
  return (
    <div className="group flex cursor-pointer items-center justify-between p-5 hover:bg-businessWorkshops-opacity">
      <div className="flex max-w-[700px] flex-col py-11 pl-11">
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
