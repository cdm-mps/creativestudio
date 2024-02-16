import { QuoteSliderProps } from "./Quote.models";
import QuoteElement from "./QuoteElement";

const QuoteSlider = ({ quotes }: QuoteSliderProps) => {
  return (
    <>
      <div
        className={`quotes flex w-[325px] overflow-x-scroll pb-[34px] md:w-[500px] md:pb-[54px] lg:w-[900px] xl:w-[1200px]`}
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
