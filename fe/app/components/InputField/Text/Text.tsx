import { TextProps } from "./Text.models";

const Text = ({ title }: TextProps) => {
  return (
    <div className="flex flex-col my-8 gap-4 font-league-gothic">
      <p className="text-lg md:text-2xl uppercase">{title}</p>
      <input
        type="text"
        className="bg-transparent border-b border-white w-full outline-none"
        placeholder="Escreva aqui"
      />
    </div>
  );
};

export default Text;
