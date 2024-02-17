import { QuoteElementProps } from "./Quote.models";

const QuoteElement = ({ className, content, author }: QuoteElementProps) => {
  return (
    <div
      className={`flex w-[184px] flex-col font-noto-sans text-white md:w-[368px] ${
        className ?? ""
      }`}
    >
      <div className={`flex flex-row `}>
        <span className="font-league-gothic text-4xl md:text-7xl">&ldquo;</span>
        <div className={`m-2 text-center text-[12px] md:m-5 md:text-xl`}>
          {content}
        </div>
        <span className="rotate-180 font-league-gothic text-4xl md:text-7xl">
          &ldquo;
        </span>
      </div>
      {author && (
        <div className="mr-2 mt-1 flex flex-row justify-end text-[10px] font-bold md:mr-9 md:text-lg">
          <span className="mr-1 text-businessWorkshops">-</span>
          <span>{author}</span>
        </div>
      )}
    </div>
  );
};

export default QuoteElement;
