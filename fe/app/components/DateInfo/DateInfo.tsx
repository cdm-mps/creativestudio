import React from "react";
import { formatDate } from "@utils/date/formatDate";
import clsx from "clsx";
import { DateInfoProps } from "./DateInfo.models";

const DateInfo = ({ date, category, size }: DateInfoProps) => {
  const _date = formatDate(date);

  return (
    <div className="flex items-center justify-center font-league-gothic uppercase">
      <span
        className={clsx(
          "font-league-gothic uppercase",
          size === "xs" && "text-2xl leading-none md:text-3xl md:leading-9",
          size === "sm" && "text-3xl md:text-4xl",
          size === "lg" && "text-4xl md:text-7xl",
        )}
      >
        {`${_date.day}/`}
      </span>
      <div
        className={clsx(
          "flex flex-col items-end",
          size === "xs" && "text-[11px] md:text-sm",
          size === "sm" && "text-sm md:text-base",
          size === "lg" && "text-base md:text-3xl",
        )}
      >
        <span
          className={clsx(
            category && `text-${category}`,
            size === "xs" && "mb-[0.5px] leading-none",
            size === "sm" && "-mt-[0.09rem] mb-[2px] md:mb-[3px]",
            size === "lg" && "md:mb-[3px]",
          )}
        >
          {_date.month}
        </span>
        <span
          className={clsx(
            (size === "sm" || size === "lg") && "-mt-[0.60rem] md:-mt-3",
            size === "xs" && "-mt-[0.10rem] leading-none",
            category && `text-${category}`,
          )}
        >
          {_date.year}
        </span>
      </div>
    </div>
  );
};

export default DateInfo;
