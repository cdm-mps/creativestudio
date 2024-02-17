import React, { useEffect, useState } from "react";
import { TeamElementProps } from "../TeamElement/TeamElement.models";
import TeamElement from "../TeamElement/TeamElement";
import Divider from "@components/Divider/Divider";
import { TeamElementRowProps } from "./TeamElementRow.models";

const TeamElementRow = ({ teamElements }: TeamElementRowProps) => {
  const [content, setContent] = useState<TeamElementProps[][]>([]);

  const limitPerRow = window.innerWidth <= 1280 ? 2 : 4;

  useEffect(() => {
    const splitArray = () => {
      const newArray = [];
      for (let i = 0; i < teamElements.length; i += limitPerRow) {
        newArray.push(teamElements.slice(i, i + limitPerRow));
      }
      return newArray;
    };

    setContent(splitArray());
  }, [limitPerRow, teamElements]);

  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {content.map((group, i) => (
        <div className="flex" key={i}>
          <Divider className="mr-4 mt-10 h-0.5 w-full bg-white md:mr-16 md:mt-[100px]" />
          <div className="flex gap-8 md:gap-16">
            {group.map((teamElement, e) => (
              <TeamElement key={e} {...teamElement} />
            ))}
          </div>
          <Divider className="ml-4 mt-10 h-0.5 w-full bg-white md:ml-16 md:mt-[100px]" />
        </div>
      ))}
    </div>
  );
};

export default TeamElementRow;
