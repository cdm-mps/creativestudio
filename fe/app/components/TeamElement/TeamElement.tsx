import React from "react";
import ImageElement from "../ImageElement/ImageElement";
import { TeamElementProps } from "./TeamElement.models";

const TeamElement = ({ image, title, subtitle }: TeamElementProps) => {
  return (
    <div className="flex flex-col items-center">
      <ImageElement
        {...image}
        //TODO: replace rounded classname with new flag rounded
        className="rounded-[50%] overflow-hidden h-[80px] w-[80px] md:h-[200px] md:w-[200px]"
      />
      <span className="font-league-gothic uppercase text-base mt-6 md:text-3xl md:mt-12 text-center">
        {title}
      </span>
      <span className="font-lato mt-2 text-xs md:text-base md:mt-4">
        {subtitle}
      </span>
    </div>
  );
};

export default TeamElement;
