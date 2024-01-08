import { IconTitleProps } from "@components/IconTitle/IconTitle.models";
import { ChevronIcon } from "@icons/ChevronIcon";
import { DotsIcon } from "@icons/DotsIcon";
import { HashtagIcon } from "@icons/HashtagIcon";
import clsx from "clsx";

const IconTitle = ({ title, category, mode }: IconTitleProps) => {
  const getIcon = () => {
    switch (mode) {
      case "hashtag":
        return (
          <HashtagIcon className={`absolute -top-24 left-0 text-${category}`} />
        );
      case "dots":
        return (
          <DotsIcon className={`absolute -top-6 -left-6 text-${category}`} />
        );
      case "chevron":
        return (
          <ChevronIcon
            className={`absolute -top-32 -left-6 w-20 text-${category}`}
          />
        );
    }
  };

  return (
    <div
      className={clsx(
        "relative",
        mode === "hashtag" && "my-24",
        (mode === "dots" || mode === "chevron") && "my-6"
      )}
    >
      {getIcon()}
      <h2 className="relative z-10 text-5xl md:text-7xl font-league-gothic">
        {title.toUpperCase()}
      </h2>
    </div>
  );
};

export default IconTitle;
