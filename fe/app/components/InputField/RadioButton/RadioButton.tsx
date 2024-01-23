import { RadioButtonProps } from "./RadioButton.models";

const RadioButton = ({
  category,
  isChecked = false,
  label,
  updateRadioButtonStatus,
}: RadioButtonProps) => {
  return (
    <div className="flex my-8">
      <div className="flex gap-2">
        <input
          type="radio"
          value={label}
          checked={isChecked}
          onClick={updateRadioButtonStatus}
          className={`accent-${category}`}
        />
        <label htmlFor={label} className="font-lato text-sm md:text-lg">
          {label}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
