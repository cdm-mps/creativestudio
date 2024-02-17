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
    className="flex cursor-pointer items-center justify-center rounded-lg border
      border-businessWorkshops px-3 py-1 text-businessWorkshops hover:opacity-80 md:px-4 md:py-2"
    onClick={onClick}
  >
    <span className="pr-2 font-league-gothic text-base uppercase text-businessWorkshops md:pr-4 md:text-xl">
      {label}
    </span>
    <Times />
  </div>
);
