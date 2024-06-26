import DateInfo from "@components/DateInfo/DateInfo";
import { MentorEventBarProps } from "@components/MentorEventBar/MentorEventBar.models";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { categoriesDictionary } from "@utils/categoriesDictionary";

const MentorEventBar = ({
  category,
  title,
  date,
  mentor,
  previous = false,
  disabled = false,
  onClick,
}: MentorEventBarProps) => {
  return (
    <div
      className={`h-[52px] gap-x-2 px-3 py-2 md:h-[92px] md:gap-x-20 md:px-8 md:py-[14px] ${
        previous ? "border md:border-[2px]" : "bg-" + category
      } flex w-full cursor-pointer items-center justify-between opacity-80 hover:opacity-100`}
      onClick={onClick}
    >
      <div className="mr-auto flex items-center gap-2 md:gap-5">
        <div className="h-[30px] w-[20px] md:h-[39.5px] md:w-[43px]">
          {categoriesDictionary[category](
            "w-[20px] h-[30px] md:w-[43px] md:h-[39.5px]",
          )}
        </div>

        <div className="flex flex-col">
          <span className="line-clamp-1 font-league-gothic text-base leading-none md:text-3xl md:leading-9">
            {title}
          </span>
          {date && (
            <div className="mr-auto">
              <DateInfo date={date} size={"xs"} />
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto flex items-center gap-1 md:gap-4">
        <MentorIdentifier
          image={mentor.image}
          name={mentor.name || ""}
          previous
          disabled={disabled}
          _id={mentor._id}
        />
        <RoundArrowButton arrowDirection="right" />
      </div>
    </div>
  );
};

export default MentorEventBar;
