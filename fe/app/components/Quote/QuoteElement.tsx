import { QuoteElementProps } from "./Quote.models";

const QuoteElement = ({ className, content, author }: QuoteElementProps) => {
  return (
    <div
      className={`flex flex-col w-[184px] md:w-[368px] font-lato text-white ${
        className ?? ""
      }`}
    >
      <div className={`flex flex-row `}>
        <text className="text-4xl md:text-7xl font-league-gothic">&ldquo;</text>
        <div
          className={`text-[12px] text-center m-3 md:text-xl md:m-5`}
        >
          {content}
        </div>
        <text className="text-4xl md:text-7xl rotate-180 font-league-gothic">
          &ldquo;
        </text>
      </div>
      {author && (
        <div className="flex flex-row justify-end mt-1 mr-2 text-[10px] font-bold md:mr-9 md:text-lg">
          <text className="text-business-workshop mr-1">-</text>
          <text>{author}</text>
        </div>
      )}
    </div>
  );
};

export default QuoteElement;
