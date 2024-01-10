import ImageElement from "@components/ImageElement/ImageElement";
import { MentorEventBarProps } from "@components/MentorEventBar/MentorEventBar.models";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";

const MentorEventBar = ({
  category,
  title,
  date,
  mentor,
  onClick,
  past = false,
}: MentorEventBarProps) => {
  const _date = {
    day: date.toString().split(" ")[2],
    month: date.toString().split(" ")[1],
  };

  return (
    <div
      className={`h-[52px] px-3 py-2 gap-x-2 md:gap-x-40 md:h-[92px] md:py-[14px] md:px-8 ${
        past ? "border md:border-[2px]" : "bg-" + category
      } w-full flex justify-between items-center cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex font-league-gothic items-center text-base gap-x-2 md:text-3xl md:gap-x-5 w-full">
        {categoriesDictionary[category](
          "w-[20px] h-[30px] md:w-[43px] md:h-[39.5px]"
        )}
        <div className="flex flex-col w-[90%]">
          <span className="line-clamp-1">{title}</span>
          <span>{_date.day + "/" + _date.month}</span>
        </div>
      </div>
      <div className="flex gap-x-1 md:gap-x-7 items-center">
        <MentorIdentifier image={mentor.image} name={mentor.name} past />
        <RoundArrowButton arrowDirection="right" />
      </div>
    </div>
  );
};

export default MentorEventBar;
