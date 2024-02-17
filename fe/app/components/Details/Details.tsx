import { DetailsProps } from "@components/Details/Details.models";
import Divider from "@components/Divider/Divider";

const Details = ({ content, category }: DetailsProps) => {
  return (
    <div className="flex gap-5 font-noto-sans">
      <Divider orientation="vertical" category={category} />
      <div className="flex flex-col gap-2">
        {content.map((element) => (
          <p className="flex gap-1 text-sm">
            <span className="font-bold">{element.label}:</span>
            {element.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Details;
