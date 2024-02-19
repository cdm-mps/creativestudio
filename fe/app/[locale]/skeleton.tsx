import Skeleton from "@components/Skeleton/Skeleton";
import React from "react";

export const HomePageSkeleton = () => {
  return (
    <>
      <div
        id="news-slider-section"
        className="mx-40 flex flex-col gap-14 pt-24"
      >
        <Skeleton width={250} height={206} />
        <Skeleton height={384} />
      </div>
      <div className="mt-[139px] w-full pt-[100px]">
        <div className="mx-40">
          <Skeleton width={250} height={206} />
        </div>
        <div className="mx-40 pt-48">
          <Skeleton height={494} />
        </div>
      </div>
      <div className="mx-40 my-48 text-center">
        <Skeleton height={72} />
      </div>
      <div className="mx-40 mb-[104px]">
        <Skeleton height={115} />
      </div>
    </>
  );
};
