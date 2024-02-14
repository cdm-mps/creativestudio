import { Clock } from "@assets/icons/Clock";
import Divider from "@components/Divider/Divider";
import EnumBulletPoint from "@components/EnumBulletPoint/EnumBulletPoint";
import { ScheduleProps } from "@components/Schedule/Schedule.models";

const ScheduleElement = ({
  title,
  duration,
  category,
  bullet,
}: ScheduleProps) => {
  return (
    <div className="flex w-full items-center md:gap-8 gap-4">
      <div className="w-8 h-8 md:w-[52px] md:h-[52px]">
        <EnumBulletPoint category={category} {...bullet} />
      </div>

      <span className="font-lato md:text-2xl md:w-[290px] min-w-[94px] flex-wrap">{title}</span>
      <div className="w-full">
        <Divider category={category} />
      </div>
      <div className="flex gap-2 md:gap-3 items-center w-[150px]">
        <div className="md:w-7 md:h-27 w-5 h-15">
          <Clock className="md:w-7 md:h-27 w-5 h-15"/>
        </div>
        <span className="font-league-gothic md:text-[32px] text-xl">{duration}</span>
      </div>
    </div>
  );
};
export default ScheduleElement;
