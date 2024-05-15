import React from "react";
import ImageElement from "../ImageElement/ImageElement";
import { TeamElementProps } from "./TeamElement.models";

const TeamElement = ({ image, name, role }: TeamElementProps) => {
  return (
    <div className="flex flex-col items-center">
      <ImageElement
        {...image}
        className="h-20 w-20 md:h-[200px] md:w-[200px]"
        rounded
      />
      <span className="mt-6 text-center font-league-gothic text-base uppercase md:mt-12 md:text-3xl">
        {name}
      </span>
      <span className="mt-2 font-noto-sans text-xs md:mt-4 md:text-base text-center">
        {role}
      </span>
    </div>
  );
};

export default TeamElement;
