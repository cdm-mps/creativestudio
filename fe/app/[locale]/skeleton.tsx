import Skeleton from "@components/Skeleton/Skeleton";
import React from "react";

export const HomePageSkeleton = () => {
  return (
    <>
      <div className="mx-9 flex flex-col gap-8">
        <Skeleton width={250} height={206} />
        <div className="flex gap-14 max-md:hidden">
          <Skeleton height={400} width={400} />
          <Skeleton height={400} width={400} />
          <Skeleton height={400} width={400} />
        </div>
        <div className="flex gap-14 md:hidden">
          <Skeleton height={200} width={200} />
        </div>
      </div>
      <div className="ml-4 mr-8 mt-32 flex items-center gap-3 max-md:flex-col md:ml-9 md:mr-16 md:mt-64 md:gap-10">
        <Skeleton width={150} height={106} />
        <Skeleton height={294} />
      </div>
      <div className="mx-9 my-24 flex justify-center md:my-48">
        <Skeleton height={72} />
      </div>
      <div className="mx-9 mb-14 md:mb-[104px]">
        <Skeleton height={115} />
      </div>
    </>
  );
};
