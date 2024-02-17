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
      <span className="-mt-1 font-league-gothic text-lg uppercase md:-mt-0 md:text-4xl">
        {duration}
      </span>
      {level && (
        <div className="flex items-center md:pt-2">
          <div className="mr-1 flex items-center rounded-lg border px-2 font-league-gothic text-sm uppercase md:mr-2 md:text-2xl">
            <span className="pr-1">{t("level")}</span>
            <span className={`text-${category}`}>{t_levels(level)}</span>
          </div>
          <Info
            className="h-3 w-3 cursor-pointer md:h-5 md:w-5"
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default EventInfo;
