import ImageElement from "@components/ImageElement/ImageElement";
import IconCreativeStud from "@assets/images/IconCreativeStud.png";
import Divider from "@components/Divider/Divider";
import { SubmitionStatusProps } from "@components/SubmitionStatus/SubmitionStatus.models";

const SubmitionStatus = ({ title, content }: SubmitionStatusProps) => {
  return (
    <div className="h-full w-[290px] md:w-[577px]">
      <div className="w-full text-center">
        <span className="font-league-gothic text-3xl md:text-[78px]">
          {title}
        </span>
      </div>
      <div className="relative mt-5 flex flex-col text-sm md:mt-9 md:gap-5 md:text-lg">
        <div className="mb-3 flex min-h-[96px] flex-col justify-around md:mb-5 md:min-h-[176px]">
          {content}
        </div>
        <Divider className="w-fit" />
        <div className="absolute right-0">
          <ImageElement
            src={IconCreativeStud}
            objectPosition="center"
            className="h-24 w-24 md:h-44 md:w-44"
            alt={"IconCreativeStud"}
          />
        </div>
      </div>
    </div>
  );
};

export default SubmitionStatus;
