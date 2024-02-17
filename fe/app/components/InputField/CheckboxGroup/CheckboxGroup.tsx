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
  onChangeValue,
}: CheckboxGroupProps) => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <Label
        title={title}
        description={description}
        required={required}
        category={category}
      />
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <Checkbox
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
