"use client";

import React from "react";
import { MentorProps } from "@components/Mentor/Mentor.models";
import ImageElement from "@components/ImageElement/ImageElement";
import { useTranslations } from "next-intl";

const Mentor = ({
  name,
  image,
  category = "business-workshop",
  eventCount,
  onClick,
}: MentorProps) => {
  const t = useTranslations("Components.Mentor");

  return (
    <div
      className="flex flex-col gap-y-7 items-center group cursor-pointer max-w-[162px] md:max-w-[362px]"
      onClick={onClick}
    >
      <div className="relative">
        <ImageElement
          src={image.src}
          alt={image.alt}
          objectPosition={"center"}
          className="h-[184px] w-[162px] md:w-[362px] md:h-[384px]"
        />
        {eventCount && (
          <div
            className={`items-center justify-center h-[26px] w-[162px] flex absolute bg-${category} bottom-0 md:group-hover:flex md:hidden md:h-[46px] md:w-[362px]`}
          >
            <span className="font-league-gothic text-xs md:text-2xl">
              {eventCount}
              {eventCount === 1 ? t("eventBarSingular") : t("eventBarPlural")}
            </span>
          </div>
        )}
      </div>

      <span className="font-league-gothic text-3xl text-center md:text-5xl">
        {name}
      </span>
    </div>
  );
};

export default Mentor;
