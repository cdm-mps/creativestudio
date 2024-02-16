import { TextAreaProps } from "./TextArea.models";

const TextArea = ({ title }: TextAreaProps) => {
  return (
    <div className="my-8 flex flex-col gap-8 font-league-gothic">
      <p className="text-lg uppercase md:text-2xl">{title}</p>
      <textarea
        className="h-[118px] w-full border border-white bg-transparent p-3 outline-none"
        placeholder="Escreva aqui"
      />
    </div>
  );
};

export default TextArea;
