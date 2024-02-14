import { QuoteElementProps } from "./Quote.models";

const QuoteElement = ({ className, content, author }: QuoteElementProps) => {
  return (
    <div
      className={`flex flex-col w-[184px] md:w-[368px] font-noto-sans text-white ${
        className ?? ""
      }`}
    >
      <div className={`flex flex-row `}>
        <span className="text-4xl md:text-7xl font-league-gothic">&ldquo;</span>
        <div className={`text-[12px] text-center m-2 md:text-xl md:m-5`}>
          {content}
        </div>
        <span className="text-4xl md:text-7xl rotate-180 font-league-gothic">
          &ldquo;
        </span>
      </div>
      {author && (
        <div className="flex flex-row justify-end mt-1 mr-2 text-[10px] font-bold md:mr-9 md:text-lg">
          <span className="text-businessWorkshops mr-1">-</span>
          <span>{author}</span>
        </div>
      )}
    </div>
  );
};

export default QuoteElement;
