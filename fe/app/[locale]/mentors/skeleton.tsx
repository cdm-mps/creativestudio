import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const MentorsPageSkeleton = () => {
  let arr = Array.from({ length: 12 }, () => ({ height: 460, width: 362 }));
  let arrMobile = Array.from({ length: 12 }, () => ({ height: 124, width: 102}));
  return (
    <div className="mx-12 flex flex-col md:mx-40">
      <Skeleton height={72} width={229} />
      <Skeleton height={140} className="my-14" />
      <div className="flex flex-wrap justify-center gap-24 max-md:hidden">
        {arr.map((skeleton, index) => (
          <Skeleton {...skeleton} key={"skl_" + index} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-12 md:hidden">
        {arrMobile.map((skeleton, index) => (
          <Skeleton {...skeleton} key={"skl_" + index} />
        ))}
      </div>
    </div>
  );
};
