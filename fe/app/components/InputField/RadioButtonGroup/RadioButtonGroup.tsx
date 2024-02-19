import React from "react";
import { RadioButtonGroupProps } from "./RadioButtonGroup.models";
import RadioButton from "../RadioButton/RadioButton";
import Label from "../Label/Label";

const RadioButtonGroup = ({
  title,
  description,
  category,
  options,
  value,
  required,
  onChangeValue,
}: RadioButtonGroupProps) => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <Label
        title={title}
        description={description}
        required={required}
        category={category}
      />
      <div className="mt-4 flex gap-10">
        {options.map((option) => (
          <RadioButton
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

export default RadioButtonGroup;
