import DateInfo from "@components/DateInfo/DateInfo";
import ImageElement from "@components/ImageElement/ImageElement";
import { MentorEventBarProps } from "@components/MentorEventBar/MentorEventBar.models";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { formatDate } from "@utils/date/formatDate";

const MentorEventBar = ({
  category,
  title,
  date,
  mentor,
  onClick,
  previous = false,
}: MentorEventBarProps) => {
  return (
    <div
      className={`h-[52px] px-3 py-2 gap-x-2 md:gap-x-40 md:h-[92px] md:py-[14px] md:px-8 ${
        previous ? "border md:border-[2px]" : "bg-" + category
      } w-full flex justify-between items-center cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 md:gap-5 mr-auto">
        <div className="w-[20px] h-[30px] md:w-[43px] md:h-[39.5px]">
          {categoriesDictionary[category](
            "w-[20px] h-[30px] md:w-[43px] md:h-[39.5px]"
          )}
        </div>

        <div className="flex flex-col">
          <span className="font-league-gothic text-base md:text-3xl line-clamp-1 leading-none md:leading-9">
            {title}
          </span>
          <div className="mr-auto">
            <DateInfo date={date} size={"xs"} />
          </div>
        </div>
      </div>
      <div className="flex gap-1 md:gap-4 items-center ml-auto">
        <MentorIdentifier image={mentor.image} name={mentor.name} past />
        <RoundArrowButton arrowDirection="right" />
      </div>
    </div>
  );
};

export default MentorEventBar;
