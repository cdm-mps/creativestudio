"use client";
import React from "react";
import ImageElement from "@components/ImageElement/ImageElement";
import { MentorProps } from "@components/Mentor/Mentor.models";
import Link from "next/link";
import clsx from "clsx";

const Mentor = ({ _id, redirectOnClick, ...rest }: MentorProps) => {
  const className = clsx(
    "flex max-w-[162px] flex-col items-center gap-y-7 md:max-w-[362px]",
    redirectOnClick && "cursor-pointer",
  );
  return (
    <React.Fragment>
      {redirectOnClick ? (
        <Link className={className} href={`mentors/${_id}`}>
          <Content redirectOnClick={redirectOnClick} {...rest} />
        </Link>
      ) : (
        <div className={className}>
          <Content redirectOnClick={redirectOnClick} {...rest} />
        </div>
      )}
    </React.Fragment>
  );
};

const Content = ({
  name,
  image,
  label,
  redirectOnClick,
}: Pick<MentorProps, "name" | "image" | "label" | "redirectOnClick">) => (
  <>
    <div className="relative">
      <ImageElement
        {...image}
        className={clsx(
          "h-[184px] w-[162px] md:h-[384px] md:w-[362px]",
          redirectOnClick && "opacity-70 hover:opacity-100",
        )}
      />
      {label && (
        <div
          className={`absolute bottom-0 flex h-[26px] w-[162px] items-center justify-center bg-businessWorkshops md:h-[46px] md:w-[362px]`}
        >
          <span className="font-league-gothic text-xs md:text-2xl">
            {label}
          </span>
        </div>
      )}
    </div>
    {name && (
      <span className="text-center font-league-gothic text-3xl md:text-5xl">
        {name}
      </span>
    )}
  </>
);

export default Mentor;
