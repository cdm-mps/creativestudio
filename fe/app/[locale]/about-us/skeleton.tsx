import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const AboutUsPageSkeleton = () => {
  return (
    <div className="mx-12 flex flex-col md:mx-40">
      <Skeleton className="mb-14" height={72} width={229} />
      <Skeleton height={42} width={300} />
      <Skeleton className="my-14" height={476} />
      <Skeleton height={576} />
      <Skeleton className="my-14" height={476} />
      <Skeleton height={490} />
    </div>
  );
};
