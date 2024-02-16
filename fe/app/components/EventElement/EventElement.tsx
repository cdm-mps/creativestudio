import React from "react";
import ImageElement from "../ImageElement/ImageElement";
import DateInfo from "../DateInfo/DateInfo";
import { EventElementProps } from "./EventElement.models";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

const EventElement = ({
  _id,
  title,
  subtitle,
  date,
  image,
  category,
  disabled,
}: EventElementProps) => {
  const t = useTranslations("Components.EventElement");

  return (
    <Link
      className="group relative m-2 h-[190px] w-[175px] cursor-pointer md:m-4 md:h-[320px] md:w-[290px]"
      href={`${category}/event/${_id}`}
    >
      <div className="absolute">
        <ImageElement
          {...image}
          className={clsx(
            "h-[190px] w-[175px] md:h-[320px] md:w-[290px]",
            disabled && "grayscale",
          )}
        />
      </div>
      <div className="absolute flex h-[190px] w-[175px] flex-col items-end bg-black bg-opacity-50 p-4 text-right md:h-[320px] md:w-[290px]">
        <DateInfo date={date} size="sm" {...(!disabled && { category })} />
        <span className="font-league-gothic text-lg uppercase md:text-4xl">
          {title}
        </span>
        <div className="font-noto-sans text-xs md:text-base">{subtitle}</div>
      </div>
      <div className="opacity-0 transition-opacity md:group-hover:opacity-100">
        <div
          className={`absolute -right-4 bottom-8 flex h-[59px] w-[322px] items-center justify-center bg-${category} h-[29.5px] w-[161px] md:h-[59px] md:w-[322px]`}
        >
          <span className="font-league-gothic text-4xl uppercase">
            {t("explore")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventElement;
