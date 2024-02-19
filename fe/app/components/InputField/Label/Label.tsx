import React from "react";
import { LabelProps } from "./Label.models";

const Label = ({ title, description, category, required }: LabelProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-league-gothic text-lg uppercase md:text-2xl">
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
