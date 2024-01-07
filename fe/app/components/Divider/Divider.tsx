import { DividerProps } from "@/app/components/Divider/Divider.models";
import clsx from "clsx";
import React from "react";

const Divider = ({ category, orientation = "horizontal" }: DividerProps) => {
  return orientation === "horizontal" ? (
    <hr className={clsx("w-full", category || "bg-white")} />
  ) : (
    <div className={clsx("w-[1px] self-stretch", category || "bg-white")} />
  );
};

export default Divider;
