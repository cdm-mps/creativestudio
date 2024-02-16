import { RadioButtonProps } from "./RadioButton.models";

const RadioButton = ({
  category,
  option,
  isChecked = false,
  onClick,
}: RadioButtonProps) => {
  return (
    <div className="flex">
      <div className="flex gap-2">
        <input
          type="radio"
          checked={isChecked}
          onClick={() => onClick(option.value)}
          className={`accent-${category}`}
        />
        <label
          htmlFor={option.value}
          className="font-noto-sans text-sm md:text-base"
        >
          {option.label}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
