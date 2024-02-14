import { ArrowTitleProps } from "@components/ArrowTitle/ArrowTitle.models";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { DiamondArrowIcon } from "@icons/DiamondLineIcon";

const ArrowTitle = ({ title, category, subTitle }: ArrowTitleProps) => {
  return (
    <div className="flex gap-3 items-center mr-3 my-3">
      <DiamondArrowIcon className={`text-${category} max-md:h-[110px]`} />
      <div className="flex flex-col">
        <CoreTitle title={title} />
        <p className="text-sm md:text-xl font-noto-sans">{subTitle}</p>
      </div>
    </div>
  );
};

export default ArrowTitle;
