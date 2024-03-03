import Skeleton from "@components/Skeleton/Skeleton";
import React from "react";

export const HomePageSkeleton = () => {
  return (
    <>
      <div
        id="news-slider-section"
        className="mx-6 flex flex-col gap-14 pt-8 md:mx-40 md:pt-24"
      >
        <Skeleton width={250} height={206} />
        <Skeleton height={384} />
      </div>
      <div className="mt-32 w-full md:mt-[139px] md:pt-[100px]">
        <div className="mx-6 md:mx-40">
          <Skeleton width={250} height={206} />
        </div>
        <div className="mx-6 pt-16 md:mx-40 md:pt-48">
          <Skeleton height={494} />
        </div>
      </div>
      <div className="mx-6 pt-16 text-center md:mx-40 md:my-48">
        <Skeleton height={72} />
      </div>
      <div className="mx-6 pt-16 md:mx-40 md:mb-[104px]">
        <Skeleton height={115} />
      </div>
    </>
  );
};
