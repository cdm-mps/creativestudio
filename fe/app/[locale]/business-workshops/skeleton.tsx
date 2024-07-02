import Skeleton from "@components/Skeleton/Skeleton";
import React from "react";

export const BusinessWorkshopsSkeleton = () => (
  <div className="mx-12 flex flex-col md:mx-40">
    <Skeleton height={72} width={200} className="md:hidden" />
    <Skeleton height={72} width={540} className="max-md:hidden" />
    <Skeleton height={42} width={300} className="mt-14" />
    <Skeleton height={250} className="mb-14 mt-12" />
    {Array(4)
      .fill(null)
      .map((_e, i) => (
        <div key={i} className="flex flex-col">
          <Skeleton height={300} />
          <Skeleton height={2} className="my-4" />
        </div>
      ))}
  </div>
);
