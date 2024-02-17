import { CheckboxProps } from "./Checkbox.models";

const Checkbox = ({ category, option, isChecked, onClick }: CheckboxProps) => {
  return (
    <div className="flex items-baseline gap-2">
      <input
        type="checkbox"
        className={`accent-${category}`}
        checked={isChecked}
        onClick={() => onClick(option.value)}
      />
      <p className="font-noto-sans text-sm md:text-base">{option.label}</p>
    </div>
  );
};

export default Checkbox;
