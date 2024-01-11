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
      className="flex w-fit group cursor-pointer mr-[12.75px] mb-2 md:mr-[20.5px] md:mb-[15px]"
      onClick={onClick}
    >
      <div className="flex flex-col items-end mr-9">
        <DateInfo date={date} size="lg" category={category} />
        <span className="font-league-gothic uppercase text-3xl w-[134.5px] md:text-5xl md:w-[269px] text-end">
          {title}
        </span>
        {categoriesDictionary[category]("w-7 h-auto mt-2 md:w-11 md:h-auto md:mt-4")}
      </div>

      <div className="flex relative w-fit">
        <div
          className={`opacity-0 group-hover:opacity-30 absolute w-[175px] h-[190px] top-2 left-2 md:w-[360px] md:h-[384px] md:top-[15px] md:left-[15px] bg-${category}`}
        />
        <ImageElement
          {...image}
          className="w-[175px] h-[190px] md:w-[360px] md:h-[384px]"
        />
        <div
          className={`flex items-center absolute justify-center w-[200.5px] h-10 bottom-2.5 -right-[12.9px] md:w-[401px] md:h-[76px] md:bottom-5 md:-right-[20.5px] bg-${category}`}
        >
          <span className="font-league-gothic uppercase text-2xl md:text-4xl">
            {highlight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsElement;
