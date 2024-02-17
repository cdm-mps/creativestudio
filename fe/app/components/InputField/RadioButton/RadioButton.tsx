import { RadioButtonProps } from "./RadioButton.models";

const RadioButton = ({
  category,
  isChecked = false,
  label,
  updateRadioButtonStatus,
}: RadioButtonProps) => {
  return (
    <div className="my-8 flex">
      <div className="flex gap-2">
        <input
          type="radio"
          value={label}
          checked={isChecked}
          onClick={updateRadioButtonStatus}
          className={`accent-${category}`}
        />
        <label htmlFor={label} className="font-noto-sans text-sm md:text-lg">
          {label}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
