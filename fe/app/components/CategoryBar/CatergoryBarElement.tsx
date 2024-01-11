import { CategoryBarProps } from "@components/CategoryBar/CategoryBar.models";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useTranslations } from "next-intl";
import { title } from "process";

const CategoryBarElement = ({ category, onClick }: CategoryBarProps) => {
  const t = useTranslations("Categories");
  return (
    <div
      className={`w-full flex items-center cursor-pointer group hover:scale-105 duration-200 ease-in-out h-[52px] px-3 py-2 gap-x-2 md:h-[76px] md:py-[14px] md:px-8 bg-${category}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-x-2 md:gap-x-5">
        <span className="font-league-gothic uppercase md:text-4xl text-base ">
          {t(category)}
        </span>
        {categoriesDictionary[category]("w-5 h-5 md:w-[38px] md:h-[38px]")}
      </div>
    </div>
  );
};

export default CategoryBarElement;
