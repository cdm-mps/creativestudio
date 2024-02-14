"use client";

import React from "react";
import { MentorProps } from "@components/Mentor/Mentor.models";
import ImageElement from "@components/ImageElement/ImageElement";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Mentor = ({
  id,
  name,
  image,
  category = "businessWorkshops",
  eventCount,
}: MentorProps) => {
  const t = useTranslations("Components.Mentor");

  return (
    <Link
      className="flex flex-col gap-y-7 items-center group cursor-pointer max-w-[162px] md:max-w-[362px]"
      href={`mentors/${id}`}
    >
      <div className="relative">
        <ImageElement
          {...image}
          className="h-[184px] w-[162px] md:w-[362px] md:h-[384px]"
        />
        {eventCount && (
          <div
            className={`items-center justify-center h-[26px] w-[162px] flex absolute bg-${category} bottom-0 xl:group-hover:flex xl:hidden md:h-[46px] md:w-[362px]`}
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
    </Link>
  );
};

export default Mentor;
