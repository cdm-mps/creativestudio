import { CoreTitleProps } from "@components/shared/CoreTitle/CoreTitle.models";
import clsx from "clsx";

const CoreTitle = ({ title, category }: CoreTitleProps) => {
  return (
    <h2
      className={clsx(
        "relative text-4xl md:text-7xl font-league-gothic",
        category && `text-${category}`
      )}
    >
      {title.toUpperCase()}
    </h2>
  );
};

export default CoreTitle;
