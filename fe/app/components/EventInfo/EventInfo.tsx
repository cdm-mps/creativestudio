import React from "react";
import DateInfo from "../DateInfo/DateInfo";
import { Info } from "@icons/Info";
import { EventInfoProps } from "./EventInfo.models";
import { useTranslations } from "next-intl";

const EventInfo = ({
  duration,
  level,
  category,
  onClick,
  date,
}: EventInfoProps) => {
  const t = useTranslations("Components.EventInfo");
  const t_levels = useTranslations("general.Levels");
  return (
    <div className="flex flex-col items-end">
      <DateInfo date={date} category={category} size="lg" />
      <span className="font-league-gothic text-lg -mt-1 md:-mt-0 md:text-4xl uppercase">
        {duration}
      </span>
      {level && (
        <div className="flex items-center md:pt-2">
          <div className="flex items-center font-league-gothic text-sm md:text-2xl uppercase border rounded-lg px-2 mr-1 md:mr-2">
            <span className="pr-1">{t("level")}</span>
            <span className={`text-${category}`}>{t_levels(level)}</span>
          </div>
          <Info
            className="cursor-pointer w-3 h-3 md:w-5 md:h-5"
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default EventInfo;
