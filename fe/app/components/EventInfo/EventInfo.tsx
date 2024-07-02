import React, { useState } from "react";
import DateInfo from "../DateInfo/DateInfo";
import { Info } from "@icons/Info";
import { EventInfoProps } from "./EventInfo.models";
import { useTranslations } from "next-intl";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import clsx from "clsx";

const EventInfo = ({ level, category, onClick, dates }: EventInfoProps) => {
  const t = useTranslations("Components.EventInfo");
  const t_levels = useTranslations("general.Levels");

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-start justify-start max-md:mt-4 max-md:w-full max-md:justify-between md:flex-col md:items-end">
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            "flex w-[88px] flex-col px-3  pt-3 md:w-[170px] md:px-6",
            expanded && " border-x border-t",
            !expanded && " mt-[1px]",
          )}
        >
          {dates.slice(0, 2).map((date) => (
            <DateInfo dates={[date]} category={category} size="lg" />
          ))}
        </div>
        <div className="relative">
          {expanded && (
            <div className="flex flex-col items-center">
              <div className="absolute z-10 flex w-[88px] flex-col items-center border-x border-b bg-background px-3 md:w-[170px] md:px-6">
                {dates.slice(2, dates.length).map((date) => (
                  <DateInfo dates={[date]} category={category} size="lg" />
                ))}
                <div
                  className={`cursor-pointer text-lg hover:opacity-70 md:text-5xl text-${category}`}
                  onClick={() => setExpanded(!expanded)}
                >
                  <IoMdArrowDropup />
                </div>
              </div>
            </div>
          )}
        </div>
        {dates.length >= 3 && (
          <div
            className={`cursor-pointer text-lg hover:opacity-70 md:text-5xl text-${category}`}
            onClick={() => setExpanded(!expanded)}
          >
            {<IoMdArrowDropdown />}
          </div>
        )}
      </div>
      {level && (
        <div className="flex items-center pt-2">
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
