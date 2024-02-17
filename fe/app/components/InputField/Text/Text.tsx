import { TextProps } from "./Text.models";

const Text = ({ title }: TextProps) => {
  return (
    <div className="my-8 flex flex-col gap-4 font-league-gothic">
      <p className="text-lg uppercase md:text-2xl">{title}</p>
      <input
        type="text"
        className="w-full border-b border-white bg-transparent outline-none"
        placeholder="Escreva aqui"
      />
    </div>
  );
};

export default Text;
