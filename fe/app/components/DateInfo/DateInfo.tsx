import React, { useEffect, useState } from "react";
import { DateFormat, formatDate } from "@utils/date/formatDate";
import clsx from "clsx";
import { DateElementProps, DateInfoProps } from "./DateInfo.models";
import { useLocale } from "next-intl";
import { FaMinus } from "react-icons/fa";

const DateInfo = ({ dates, size, ...rest }: DateInfoProps) => {
  const locale = useLocale();

  const [startDate, setStartDate] = useState<DateFormat | undefined>(undefined);
  const [endDate, setEndDate] = useState<DateFormat | undefined>(undefined);

  if (!dates || !dates.length) {
    return;
  }

  useEffect(() => {
    const isMultipleDates = dates.length > 1;

    if (isMultipleDates) {
      setStartDate(formatDate(dates[0], locale));
      setEndDate(formatDate(dates[dates.length - 1], locale));
    } else {
      setStartDate(formatDate(dates[0], locale));
    }
  }, []);

  return (
    <div
      className={clsx(
        "flex items-center",
        (size === "sm" || size === "xs") && "gap-1 md:gap-2",
        size === "lg" && "gap-2 md:gap-3",
      )}
    >
      {startDate && <DateElement date={startDate} size={size} {...rest} />}

      {endDate && (
        <div
          className={clsx(
            "flex items-center",
            (size === "sm" || size === "xs") && "gap-1 md:gap-2",
            size === "lg" && "gap-2 md:gap-3",
          )}
        >
          <FaMinus
            className={clsx(
              size === "xs" && "text-[4px] md:text-[6px]",
              size === "sm" && "text-[6px] md:text-[8px]",
              size === "lg" && "text-[8px] md:text-lg",
            )}
          />
          <DateElement date={endDate} size={size} {...rest} />
        </div>
      )}
    </div>
  );
};

const DateElement = ({ date, size, category }: DateElementProps) => (
  <div className="flex items-center justify-center font-league-gothic uppercase max-md:mt-1">
    <span
      className={clsx(
        "font-league-gothic uppercase",
        size === "xs" && "text-xl leading-none md:text-3xl md:leading-9",
        size === "sm" && "text-3xl md:text-4xl",
        size === "lg" && "text-4xl md:text-7xl",
      )}
    >
      {`${date.day}/`}
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
        {date.month}
      </span>
      <span
        className={clsx(
          (size === "sm" || size === "lg") && "-mt-[0.60rem] md:-mt-3",
          size === "xs" && "-mt-[0.10rem] leading-none",
          category && `text-${category}`,
        )}
      >
        {date.year}
      </span>
    </div>
  </div>
);

export default DateInfo;
