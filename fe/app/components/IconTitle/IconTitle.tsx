import { IconTitleProps } from "@components/IconTitle/IconTitle.models";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { ChevronIcon } from "@icons/ChevronIcon";
import { DotsIcon } from "@icons/DotsIcon";
import { HashtagIcon } from "@icons/HashtagIcon";

const IconTitle = ({ title, category, mode }: IconTitleProps) => {
  const getIcon = () => {
    switch (mode) {
      case "hashtag":
        return (
          <HashtagIcon
            className={`absolute md:-top-24 md:left-0 text-${category} -left-14 -top-8 max-md:max-h-24`}
          />
        );
      case "dots":
        return (
          <DotsIcon
            className={`absolute -left-6 -top-6 text-${category} max-md:w-[74px]`}
          />
        );
      case "chevron":
        return (
          <ChevronIcon
            className={`absolute -left-6 -top-32 w-20 text-${category} max-md:w-11`}
          />
        );
    }
  };

  return (
    <div className="relative">
      {getIcon()}
      <CoreTitle title={title} />
    </div>
  );
};

export default IconTitle;
