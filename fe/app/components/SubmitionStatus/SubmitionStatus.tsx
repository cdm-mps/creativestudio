import ImageElement from "@components/ImageElement/ImageElement";
import IconCreativeStud from "@assets/images/IconCreativeStud.png";
import Divider from "@components/Divider/Divider";
import { SubmitionStatusProps } from "@components/SubmitionStatus/SubmitionStatus.models";

const SubmitionStatus = ({ title, content }: SubmitionStatusProps) => {
  return (
    <div className="md:w-[577px] w-[290px] h-full">
      <div className="w-full text-center">
        <span className="md:text-[78px] text-3xl font-league-gothic">
          {title}
        </span>
      </div>
      <div className="relative text-sm md:text-lg flex flex-col md:gap-5 md:mt-9 mt-5">
        <div className="flex flex-col justify-around min-h-[96px] md:min-h-[176px] md:mb-5 mb-3">
          {content}
        </div>
        <Divider className="w-fit" />
        <div className="absolute right-0">
          <ImageElement
            src={IconCreativeStud}
            objectPosition="center"
            className="w-24 h-24 md:w-44 md:h-44"
            alt={"IconCreativeStud"}
          />
        </div>
      </div>
    </div>
  );
};

export default SubmitionStatus;
