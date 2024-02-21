import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const CalendarPageSkeleton = () => {
  return (
    <div className="mx-40 flex flex-col gap-10">
      <Skeleton height={72} width={229} />
      <Skeleton height={986} />
      <Skeleton width={190} height={206} />
      <Skeleton height={92} />
    </div>
  );
};
