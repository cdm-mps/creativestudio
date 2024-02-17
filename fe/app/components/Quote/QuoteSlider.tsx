import { QuoteSliderProps } from "./Quote.models";
import QuoteElement from "./QuoteElement";

const QuoteSlider = ({ quotes }: QuoteSliderProps) => {
  return (
    <div
      className={`flex overflow-x-scroll w-[325px] md:w-[500px] lg:w-[900px] xl:w-[100%] quotes pb-[34px] md:pb-[54px]`}
    >
      <div className="flex gap-[28px] md:gap-[58px]">
        {quotes?.map((quote, index) => (
          <QuoteElement key={"quote_element_" + index} {...quote} />
        ))}
      </div>
    </div>
  );
};
export default QuoteSlider;
