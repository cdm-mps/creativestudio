import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const CreativeWorkshopsSkeleton = () => (
  <div className="mx-12 flex flex-col md:mx-40">
    <Skeleton height={72} width={240} />
    <Skeleton height={42} width={300} className="mt-7 md:mt-14" />
    <Skeleton height={355} className="mb-7 mt-6 md:mb-14 md:mt-12" />
    <div className="flex flex-col items-center">
      <Skeleton height={72} className="mb-7 mt-3 md:mb-14 md:mt-6" />
      <Skeleton height={699} className="mb-7 mt-6 md:mb-14 md:mt-12" />
    </div>
  </div>
);
