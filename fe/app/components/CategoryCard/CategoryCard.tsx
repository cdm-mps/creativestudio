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
    <div className="flex items-center justify-between cursor-pointer group p-5 hover:bg-businessWorkshops-opacity">
      <div className="flex flex-col py-11 pl-11 max-w-[700px]">
        <div className="flex items-center">
          <span className="font-league-gothic text-6xl pr-10 group-hover:underline">
            {title}
          </span>
          <div className="hidden group-hover:block">
            <RoundArrowButton arrowDirection="right" />
          </div>
        </div>
        <span className="font-noto-sans pt-7">{subtitle}</span>
        <div className="flex flex-wrap gap-5 mt-12">
          {subCategories?.map((subCategory) => (
            <span className="font-league-gothic text-5xl uppercase">
              {subCategory}
            </span>
          ))}
        </div>
      </div>
      <div className="mr-11">
        <ImageElement {...image} className="w-[439px] h-[307px] grayscale" />
      </div>
    </div>
  );
};

export default CategoryCard;
