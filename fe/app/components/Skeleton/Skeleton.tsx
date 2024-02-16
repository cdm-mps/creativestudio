import React from "react";
import { SkeletonProps } from "./Skeleton.models";

const Skeleton = ({ width, height, className = "" }: SkeletonProps) => {
  return (
    <div
      className={`h-fit w-fit animate-skeleton-loading rounded opacity-10 ${className} ${
        !width && "w-full"
      }`}
    >
      <div
        className={`rounded`}
        style={{
          height,
          width,
        }}
      />
    </div>
  );
};

export default Skeleton;
