import { TextAreaProps } from "./TextArea.models";

const TextArea = ({ title }: TextAreaProps) => {
  return (
    <div className="flex flex-col my-8 gap-8 font-league-gothic">
      <p className="text-lg md:text-2xl uppercase">{title}</p>
      <textarea
        className="bg-transparent border border-white w-full h-[118px] p-3 outline-none"
        placeholder="Escreva aqui"
      />
    </div>
  );
};

export default TextArea;
