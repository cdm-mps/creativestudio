import React from "react";
import Skeleton from "@components/Skeleton/Skeleton";

export const ContactsPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton height={30} width={450} />
      <Skeleton height={30} width={450} />
      <Skeleton height={2} width={450} />
      <div className="flex gap-2">
        <Skeleton height={18} width={18} />
        <Skeleton height={18} width={150} />
      </div>
    </div>
  );
};
