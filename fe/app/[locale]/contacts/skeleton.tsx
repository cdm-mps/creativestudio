import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const ContactsPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton height={31} width={110} />

      <Skeleton height={25} width={300} />
      <Skeleton height={25} width={300} />
      <Skeleton height={25} width={300} />
      <Skeleton height={25} width={300} className="mb-6" />

      <Skeleton height={27} width={90} />
      <div className="flex gap-4">
        <Skeleton height={24} width={24} />
        <Skeleton height={24} width={24} />
        <Skeleton height={24} width={24} />
      </div>
    </div>
  );
};
