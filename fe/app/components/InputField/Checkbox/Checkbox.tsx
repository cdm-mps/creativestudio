import { CheckboxProps } from "./Checkbox.models";

const Checkbox = ({ category }: CheckboxProps) => {
  return (
    <div className="flex my-8">
      <div className="flex items-baseline gap-2">
        <input type="checkbox" className={`accent-${category}`} />
        <p className="font-lato text-sm md:text-lg">
          Quero ser adicionado ao grupo de Whatsapp e assim receber os acessos
          para as sessões
        </p>
      </div>
    </div>
  );
};

export default Checkbox;
