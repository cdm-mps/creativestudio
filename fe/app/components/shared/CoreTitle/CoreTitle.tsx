import { CoreTitleProps } from "@components/shared/CoreTitle/CoreTitle.models";

const CoreTitle = ({ title }: CoreTitleProps) => {
  return (
    <h2 className="text-5xl md:text-7xl font-league-gothic">
      {title.toUpperCase()}
    </h2>
  );
};

export default CoreTitle;
