import React from "react";
import { LabelProps } from "./Label.models";
import clsx from "clsx";

const Label = ({
  title,
  description,
  category,
  required,
  hasError,
}: LabelProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={clsx(
          "font-league-gothic text-lg uppercase md:text-2xl",
          hasError && `text-${category}`,
        )}
      >
        <span>{title}</span>
        {required && <span className={`text-${category} pl-1`}>*</span>}
      </div>
      {description && (
        <span className="font-noto-sans text-sm opacity-50">{description}</span>
      )}
    </div>
  );
};

export default Label;
