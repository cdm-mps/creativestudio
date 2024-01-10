import ImageElement from "@components/ImageElement/ImageElement";
import { MentorEventBarProps } from "@components/MentorEventBar/MentorEventBar.models";
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

      <div className="flex items-center font-lato text-xs gap-x-2 md:text-xl md:gap-x-4 ">
        <ImageElement
          {...mentor.image}
          className={`w-6 h-6 md:w-16 md:h-16 ${past && "grayscale"}`}
          rounded
        />
        <span className="line-clamp-2 w-[100px] md:w-[250px]">{mentor.name}</span>
      </div>
    </div>
  );
};

export default MentorEventBar;
