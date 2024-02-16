import { CoreTitleProps } from "@components/shared/CoreTitle/CoreTitle.models";
import clsx from "clsx";

const CoreTitle = ({ title, category }: CoreTitleProps) => {
  return (
    <h2
      className={clsx(
        "relative font-league-gothic text-3xl md:text-7xl",
        category && `text-${category}`,
      )}
    >
      {title.toUpperCase()}
    </h2>
  );
};

export default CoreTitle;
