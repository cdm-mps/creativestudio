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
  hasError,
  onChangeValue,
}: RadioButtonGroupProps) => {
  return (
    <div className="my-4 flex flex-col gap-4 md:my-8">
      <Label
        title={title}
        description={description}
        required={required}
        category={category}
        hasError={hasError}
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
