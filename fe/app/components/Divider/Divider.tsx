import { DividerProps } from "@/app/components/Divider/Divider.models";
import React from "react";

const Divider = ({ category, orientation = "horizontal" }: DividerProps) => {
  return orientation === "horizontal" ? (
    <hr className={`w-full border-${category}`} />
  ) : (
    <div className={`w-[1px] self-stretch bg-${category ?? "white"}`} />
  );
};

export default Divider;
