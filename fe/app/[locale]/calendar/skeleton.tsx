import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const CalendarPageSkeleton = () => {
  return (
    <div className="mx-12 flex flex-col gap-5 md:mx-40 md:gap-10">
      <Skeleton height={72} width={229} />
      <Skeleton height={386} className="md:hidden" />
      <Skeleton height={986} className="max-md:hidden" />
      <Skeleton width={190} height={106} className="md:hidden" />
      <Skeleton width={190} height={206} className="max-md:hidden" />
      <Skeleton height={92} />
    </div>
  );
};
