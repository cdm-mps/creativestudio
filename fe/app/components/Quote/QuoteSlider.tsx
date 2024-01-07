import { QuoteSliderProps } from "./Quote.models";
import QuoteElement from "./QuoteElement";

const QuoteSlider = ({ quotes }: QuoteSliderProps) => {
  return (
    <>
      <div className="flex flex-no-wrap overflow-x-scroll test items-start mb-8 gap-x-[58px]">
        {quotes.map((quote, index) => (
          <div key={"quote_element_" + index} className="flex-none">
            <QuoteElement {...quote} />
          </div>
        ))}
      </div>
    </>
  );
};
export default QuoteSlider;
