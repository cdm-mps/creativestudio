import React from "react";
import { SkeletonProps } from "./Skeleton.models";

const Skeleton = ({ width, height, className = "" }: SkeletonProps) => {
  return (
    <div
      className={`rounded opacity-10 w-fit h-fit animate-skeleton-loading ${className} ${
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
