import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const MentorsPageSkeleton = () => {
  let arr = Array.from({ length: 12 }, () => ({ height: 460, width: 362 }));
  return (
    <div className="mx-40 flex flex-col">
      <Skeleton height={72} width={229} />
      <Skeleton height={140} className="my-14" />
      <div className="flex flex-wrap justify-center gap-24">
        {arr.map((skeleton, index) => (
          <Skeleton {...skeleton} key={"skl_" + index} />
        ))}
      </div>
    </div>
  );
};
