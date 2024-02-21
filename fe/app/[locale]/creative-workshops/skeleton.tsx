import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const CreativeWorkshopsSkeleton = () => (
  <div className="mx-40 flex flex-col">
    <Skeleton height={72} width={440} />
    <Skeleton height={42} width={300} className="mt-14" />
    <Skeleton height={355} className="mb-14 mt-12" />
    <div className="flex flex-col items-center">
      <Skeleton height={72} width={414} className="mb-14 mt-6" />
      <Skeleton height={699} width={1049} className="mb-14 mt-12" />
    </div>
  </div>
);
