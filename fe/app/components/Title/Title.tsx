import Divider from "@components/Divider/Divider";
import { TitleProps } from "@components/Title/Title.models";
const Title = ({ title, category }: TitleProps) => {
  return (
    <div className="flex gap-3">
      <Divider orientation="vertical" category={category} />
      <h2 className="text-white text-5xl md:text-7xl font-league-gothic">
        {title.toUpperCase()}
      </h2>
    </div>
  );
};

export default Title;
