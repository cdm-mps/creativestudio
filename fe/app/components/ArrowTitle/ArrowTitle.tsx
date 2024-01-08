import { ArrowTitleProps } from "@components/ArrowTitle/ArrowTitle.models";
import { DiamondArrowIcon } from "@icons/DiamondLineIcon";

const ArrowTitle = ({ title, category, subTitle }: ArrowTitleProps) => {
  return (
    <div className="flex gap-3 items-center m-3">
      <DiamondArrowIcon className={`text-${category} max-md:h-[120px]`} />
      <div className="flex flex-col">
        <h2 className="text-5xl md:text-7xl font-league-gothic">
          {title.toUpperCase()}
        </h2>
        <p className="text-base md:text-xl font-lato">{subTitle}</p>
      </div>
    </div>
  );
};

export default ArrowTitle;
