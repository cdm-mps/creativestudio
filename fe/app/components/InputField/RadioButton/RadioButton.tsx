import { RadioButtonProps } from "./RadioButton.models";

const RadioButton = ({ category }: RadioButtonProps) => {
  return (
    <div className="flex my-8">
      <div className="flex gap-2">
        <input type="radio" className={`accent-${category}`} />
        <p className="font-lato text-sm md:text-lg">Pagamento a pronto</p>
      </div>
    </div>
  );
};

export default RadioButton;
