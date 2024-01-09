import Divider from "@components/Divider/Divider";
import { TitleProps } from "@components/Title/Title.models";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
const Title = ({ title, category }: TitleProps) => {
  return (
    <div className="flex gap-3">
      <Divider orientation="vertical" category={category} />
      <CoreTitle title={title} />
    </div>
  );
};

export default Title;
