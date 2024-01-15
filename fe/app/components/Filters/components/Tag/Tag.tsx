import { Times } from "@assets/icons/Times";
import React from "react";

export const Tag = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <div
    className="flex items-center justify-center border border-business-workshop text-business-workshop 
      rounded-lg px-3 py-1 md:px-4 md:py-2 cursor-pointer hover:opacity-80"
    onClick={onClick}
  >
    <span className="text-business-workshop font-league-gothic text-base md:text-xl uppercase pr-2 md:pr-4">
      {label}
    </span>
    <Times />
  </div>
);
