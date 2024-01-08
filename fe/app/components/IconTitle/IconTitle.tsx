import { IconTitleProps } from "@components/IconTitle/IconTitle.models";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { ChevronIcon } from "@icons/ChevronIcon";
import { DotsIcon } from "@icons/DotsIcon";
import { HashtagIcon } from "@icons/HashtagIcon";
import clsx from "clsx";

const IconTitle = ({ title, category, mode }: IconTitleProps) => {
  const getIcon = () => {
    switch (mode) {
      case "hashtag":
        return (
          <HashtagIcon
            className={`absolute md:-top-24 md:left-0 text-${category} max-md:max-h-40 -left-10 -top-14`}
          />
        );
      case "dots":
        return (
          <DotsIcon
            className={`absolute -top-6 -left-6 text-${category} max-md:w-28`}
          />
        );
      case "chevron":
        return (
          <ChevronIcon
            className={`absolute -top-32 -left-6 w-20 text-${category} max-md:w-16`}
          />
        );
    }
  };

  return (
    <div
      className={clsx(
        "relative",
        mode === "hashtag" && "md:mt-24 md:mb-32 mb-12 mt-16",
        mode === "chevron" && "md:my-12 mt-5",
        mode === "dots" && "md:my-12 mb-5 mt-12"
      )}
    >
      {getIcon()}
      <CoreTitle title={title} />
    </div>
  );
};

export default IconTitle;
