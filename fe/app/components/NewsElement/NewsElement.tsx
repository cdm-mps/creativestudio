import React from "react";
import DateInfo from "../DateInfo/DateInfo";
import ImageElement from "../ImageElement/ImageElement";
import { NewsElementProps } from "./NewsElement.models";
import { categoriesDictionary } from "@utils/categoriesDictionary";

const NewsElement = ({
  title,
  highlight,
  date,
  category,
  image,
  onClick,
}: NewsElementProps) => {
  return (
    <div
      className="group mb-2 mr-[12.75px] flex w-fit cursor-pointer md:mb-[15px] md:mr-[20.5px]"
      onClick={onClick}
    >
      <div className="mr-9 flex flex-col items-end">
        <DateInfo date={date} size="lg" category={category} />
        <span className="w-[134.5px] text-end font-league-gothic text-3xl uppercase md:w-[269px] md:text-5xl">
          {title}
        </span>
        {categoriesDictionary[category](
          "w-7 h-auto mt-2 md:w-11 md:h-auto md:mt-4",
        )}
      </div>

      <div className="relative flex w-fit">
        <div
          className={`absolute left-2 top-2 h-[190px] w-[175px] opacity-0 group-hover:opacity-30 md:left-[15px] md:top-[15px] md:h-[384px] md:w-[360px] bg-${category}`}
        />
        <ImageElement
          {...image}
          className="h-[190px] w-[175px] md:h-[384px] md:w-[360px]"
        />
        <div
          className={`absolute -right-[12.9px] bottom-2.5 flex h-10 w-[200.5px] items-center justify-center md:-right-[20.5px] md:bottom-5 md:h-[76px] md:w-[401px] bg-${category}`}
        >
          <span className="font-league-gothic text-2xl uppercase md:text-4xl">
            {highlight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsElement;
