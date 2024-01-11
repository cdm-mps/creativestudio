import { DividerProps } from "@/app/components/Divider/Divider.models";
import clsx from "clsx";
import React from "react";

const Divider = ({ category, orientation = "horizontal" }: DividerProps) => {
  return orientation === "horizontal" ? (
    <hr className={`w-full border-${category}`} />
  ) : (
    <div
      className={clsx(
        "w-[1px] self-stretch",
        category ? `bg-${category}` : "bg-white"
      )}
    />
  );
};

export default Divider;
