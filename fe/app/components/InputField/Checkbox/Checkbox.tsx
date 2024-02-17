import { CheckboxProps } from "./Checkbox.models";

const Checkbox = ({
  category,
  label,
  isChecked,
  updateCheckboxStatus,
}: CheckboxProps) => {
  return (
    <div className="my-8 flex">
      <div className="flex items-baseline gap-2">
        <input
          type="checkbox"
          className={`accent-${category}`}
          checked={isChecked}
          onClick={updateCheckboxStatus}
        />
        <p className="font-noto-sans text-sm md:text-lg">{label}</p>
      </div>
    </div>
  );
};

export default Checkbox;
