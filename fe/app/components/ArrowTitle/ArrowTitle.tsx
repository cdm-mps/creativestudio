import { ArrowTitleProps } from "@components/ArrowTitle/ArrowTitle.models";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { DiamondArrowIcon } from "@icons/DiamondLineIcon";

const ArrowTitle = ({ title, category, subTitle }: ArrowTitleProps) => {
  return (
    <div className="flex gap-3 items-center m-3">
      <DiamondArrowIcon className={`text-${category} max-md:h-[120px]`} />
      <div className="flex flex-col">
        <CoreTitle title={title} />
        <p className="text-base md:text-xl font-lato">{subTitle}</p>
      </div>
    </div>
  );
};

export default ArrowTitle;
