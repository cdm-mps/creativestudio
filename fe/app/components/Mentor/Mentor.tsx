"use client";

import React from "react";
import { MentorProps } from "@components/Mentor/Mentor.models";
import ImageElement from "@components/ImageElement/ImageElement";
import { useTranslations } from "next-intl";

const Mentor = ({
  name,
  image,
  category = "businessWorkshops",
  descriptionLabel,
  onClick,
  showName = true,
}: MentorProps) => {
  const t = useTranslations("Components.Mentor");

  return (
    <div
      className="group flex max-w-[162px] cursor-pointer flex-col items-center gap-y-7 md:max-w-[362px]"
      onClick={onClick}
    >
      <div className="relative">
        <ImageElement
          {...image}
          className="h-[184px] w-[162px] md:h-[384px] md:w-[362px]"
        />
        {descriptionLabel && (
          <div
            className={`absolute flex h-[26px] w-[162px] items-center justify-center bg-${category} bottom-0 md:h-[46px] md:w-[362px]`}
          >
            <span className="font-league-gothic text-xs md:text-2xl">
              {descriptionLabel}
              {/* {eventCount}
              {eventCount === 1 ? t("eventBarSingular") : t("eventBarPlural")} */}
            </span>
          </div>
        )}
      </div>

      {showName && (
        <span className="text-center font-league-gothic text-3xl md:text-5xl">
          {name}
        </span>
      )}
    </div>
  );
};

export default Mentor;
