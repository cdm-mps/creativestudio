import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const MentorPageSkeleton = () => {
  return (
    <div className="mx-40 flex flex-col gap-[89px]">
      <Skeleton height={104} width={366} />
      <div className="flex gap-10">
        <Skeleton height={384} width={362} />
        <Skeleton height={384} />
      </div>
      <div className="flex flex-col gap-20">
        <Skeleton height={206} width={366} />
        <div className="flex flex-col gap-10">
          <Skeleton height={92} />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Skeleton height={206} width={366} />
        <div className="flex flex-col gap-10">
          <Skeleton height={92} />
        </div>
      </div>
    </div>
  );
};
