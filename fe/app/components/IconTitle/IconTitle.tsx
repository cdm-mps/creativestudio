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
            className={`absolute md:-top-24 md:left-0 text-${category} max-md:max-h-24 -left-14 -top-8`}
          />
        );
      case "dots":
        return (
          <DotsIcon
            className={`absolute -top-6 -left-6 text-${category} max-md:w-[74px]`}
          />
        );
      case "chevron":
        return (
          <ChevronIcon
            className={`absolute -top-32 -left-6 w-20 text-${category} max-md:w-11`}
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
