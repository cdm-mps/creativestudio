import { QuoteElementProps } from "./Quote.models";

const QuoteElement = ({
  container,
  text = {
    content: "Empty content",
    author: "Person X",
  },
}: QuoteElementProps) => {
  return (
    <>
      <div
        className={`flex flex-col w-[132px] md:w-[368px] ${container?.className}`}
      >
        <div className={`flex flex-row `}>
          <text className="text-4xl md:text-7xl">&ldquo;</text>
          <text
            className={`text-[10px] text-center m-3 md:text-xl md:m-5 ${text.className}`}
          >
            {text?.content}
          </text>
          <text className="text-4xl md:text-7xl rotate-180">&ldquo;</text>
        </div>
        <div className="flex flex-row justify-end mt-1 mr-2 text-[10px] md:mr-9 md:text-xl">
          <text className="text-business-workshop mr-1">-</text>
          <text>{text?.author}</text>
        </div>
      </div>
    </>
  );
};

export default QuoteElement;
