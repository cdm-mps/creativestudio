import DateInfo from "@components/DateInfo/DateInfo";
import { MentorEventBarProps } from "@components/MentorEventBar/MentorEventBar.models";
import MentorsGroup from "@components/MentorsGroup/MentorsGroup";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { Tag } from "@components/Tag/Tag";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useTranslations } from "next-intl";

const MentorEventBar = ({
  category,
  title,
  date,
  mentors,
  previous = false,
  soldOut,
  onClick,
}: MentorEventBarProps) => {
  const t = useTranslations("Components.EventElement");
  return (
    <div className="relative">
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
                <DateInfo dates={date} size={"xs"} />
              </div>
            )}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-10">
          <MentorsGroup
            mentors={mentors}
            size="large"
            category={category}
            disabled={previous}
            type={"secondary"}
          />
          <RoundArrowButton arrowDirection="right" />
        </div>
      </div>
      {!previous && soldOut && (
        <div
          className="absolute top-0 flex h-[52px] w-full cursor-pointer items-center justify-center bg-black-50 opacity-80 hover:opacity-100 md:h-[92px]"
          onClick={onClick}
        >
          <div className="rotate flex -rotate-12 items-center justify-center">
            <Tag label={t("soldOutEvent")} size="small" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorEventBar;
