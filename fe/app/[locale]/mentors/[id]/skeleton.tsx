import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const MentorPageSkeleton = () => {
  return (
    <div className="mx-12 flex flex-col gap-11 md:mx-40 md:gap-20">
      <Skeleton height={104} width={366} className="max-md:hidden" />
      <Skeleton height={104} className="md:hidden" />
      <div className="flex gap-10 max-md:flex-col">
        <Skeleton height={384} width={362} className="max-md:hidden" />
        <Skeleton height={162} width={162} className="md:hidden" />
        <Skeleton height={384} />
      </div>
      <div className="flex flex-col md:gap-20 gap-10">
        <Skeleton height={206} width={366} className="max-md:hidden" />
        <Skeleton height={206} className="md:hidden" />
        <div className="flex flex-col gap-10">
          <Skeleton height={92} />
        </div>
      </div>
      <div className="flex flex-col md:gap-20 gap-10">
        <Skeleton height={206} width={366} className="max-md:hidden" />
        <Skeleton height={206} className="md:hidden" />
        <div className="flex flex-col md:gap-10 gap-5">
          <Skeleton height={92} />
        </div>
      </div>
    </div>
  );
};
