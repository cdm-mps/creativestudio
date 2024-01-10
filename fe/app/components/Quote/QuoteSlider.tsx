import { QuoteSliderProps } from "./Quote.models";
import QuoteElement from "./QuoteElement";

const QuoteSlider = ({ quotes }: QuoteSliderProps) => {
  return (
    <>
      <div
        className={`flex overflow-x-scroll w-[300px] md:w-[500px] lg:w-[900px] xl:w-[1200px]`}
      >
        <div className="flex gap-[28px] md:gap-[58px]">
          {quotes.map((quote, index) => (
            <QuoteElement key={"quote_element_" + index} {...quote} />
          ))}
        </div>
      </div>
    </>
  );
};
export default QuoteSlider;
