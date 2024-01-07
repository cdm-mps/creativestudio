import { DividerProps } from "@/app/components/Divider/Divider.models";
import clsx from "clsx";
import React from "react";

const Divider = ({ category, orientation = "horizontal" }: DividerProps) => {
  return orientation === "horizontal" ? (
    <hr className={`w-[1px] self-stretch bg-${category ?? "white"}`} />
  ) : (
    <div className={`w-full border-${category}`} />
  );
};

export default Divider;
