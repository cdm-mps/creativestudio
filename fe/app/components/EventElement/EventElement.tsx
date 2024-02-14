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
      className="group relative cursor-pointer m-2 w-[175px] h-[190px] md:m-4 md:w-[290px] md:h-[320px]"
      href={`${category}/event/${_id}`}
    >
      <div className="absolute">
        <ImageElement
          {...image}
          className={clsx(
            "w-[175px] h-[190px] md:w-[290px] md:h-[320px]",
            disabled && "grayscale"
          )}
        />
      </div>
      <div className="flex flex-col absolute items-end p-4 bg-black bg-opacity-50 text-right w-[175px] h-[190px] md:w-[290px] md:h-[320px]">
        <DateInfo date={date} size="sm" {...(!disabled && { category })} />
        <span className="font-league-gothic uppercase text-lg md:text-4xl">
          {title}
        </span>
        <div className="font-noto-sans text-xs md:text-base">{subtitle}</div>
      </div>
      <div className="opacity-0 md:group-hover:opacity-100 transition-opacity">
        <div
          className={`flex items-center absolute justify-center w-[322px] h-[59px] bottom-8 -right-4 bg-${category} w-[161px] h-[29.5px] md:w-[322px] md:h-[59px]`}
        >
          <span className="font-league-gothic uppercase text-4xl">
            {t("explore")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventElement;
