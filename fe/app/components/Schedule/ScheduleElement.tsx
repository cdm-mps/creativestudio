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
    <div className="flex w-full items-center gap-4 md:gap-8">
      <div className="h-8 w-8 md:h-[52px] md:w-[52px]">
        <EnumBulletPoint category={category} {...bullet} />
      </div>

      <span className="min-w-[94px] flex-wrap font-noto-sans md:w-[290px] text-sm md:text-xl">
        {title}
      </span>
      <div className="w-full">
        <Divider category={category} />
      </div>
      <div className="flex w-[150px] items-center gap-2 md:gap-3">
        <div className="md:h-27 h-15 w-5 md:w-7">
          <Clock className="md:h-27 h-15 w-5 md:w-7" />
        </div>
        <span className="font-league-gothic text-lg md:text-3xl">
          {duration}
        </span>
      </div>
    </div>
  );
};
export default ScheduleElement;
