"use client";

import ImageElement from "@components/ImageElement/ImageElement";
import { MentorProps } from "@components/Mentor/Mentor.models";
import Link from "next/link";

const Mentor = ({
  id,
  name,
  image,
  category = "businessWorkshops",
  label,
}: MentorProps) => {
  return (
    <Link
      className="group flex max-w-[162px] cursor-pointer flex-col items-center gap-y-7 md:max-w-[362px]"
      href={`mentors/${id}`}
    >
      <div className="relative">
        <ImageElement
          {...image}
          className="h-[184px] w-[162px] md:h-[384px] md:w-[362px]"
        />
        {label && (
          <div
            className={`absolute flex h-[26px] w-[162px] items-center justify-center bg-${category} bottom-0 md:h-[46px] md:w-[362px] xl:hidden xl:group-hover:flex`}
          >
            <span className="font-league-gothic text-xs md:text-2xl">
              {label}
            </span>
          </div>
        )}
      </div>
      <span className="text-center font-league-gothic text-3xl md:text-5xl">
        {name}
      </span>
    </Link>
  );
};

export default Mentor;
