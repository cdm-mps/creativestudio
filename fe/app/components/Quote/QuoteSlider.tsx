import { QuoteSliderProps } from "./Quote.models";
import QuoteElement from "./QuoteElement";

const QuoteSlider = ({ elements }: QuoteSliderProps) => {
  return (
    <>
      <div className="flex flex-no-wrap overflow-x-scroll test items-start mb-8 gap-x-[58px]">
        {elements.map((e, i) => (
          <div key={"quote_element_" + i} className="flex-none">
            <QuoteElement {...e} />
          </div>
        ))}
      </div>
    </>
  );
};
export default QuoteSlider;
