import React from "react";
import Label from "../Label/Label";
import { CheckboxGroupProps } from "./CheckboxGroup.models";
import Checkbox from "../Checkbox/Checkbox";

const CheckboxGroup = ({
  title,
  description,
  category,
  options,
  value,
  required,
  hasError,
  onChangeValue,
}: CheckboxGroupProps) => {
  return (
    <div className="md:my-8flex my-4 flex-col gap-4">
      <Label
        title={title}
        description={description}
        required={required}
        category={category}
        hasError={hasError}
      />
      <div className="flex flex-col gap-4">
        {options.map((option, i) => (
          <Checkbox
            key={i}
            category={category}
            option={option}
            isChecked={option.value === value}
            onClick={(value) => onChangeValue(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
