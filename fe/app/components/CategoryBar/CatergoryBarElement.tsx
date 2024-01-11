import { CategoryBarProps } from "@components/CategoryBar/CategoryBar.models";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useTranslations } from "next-intl";
import { title } from "process";

const CategoryBarElement = ({ category, onClick }: CategoryBarProps) => {
  const t = useTranslations("Categories");
  return (
    <div
      className={`w-full flex items-center cursor-pointer group hover:scale-105 h-[52px] px-3 py-2 gap-x-2 md:h-[76px] md:py-[14px] md:px-8 bg-${category}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-x-2 md:gap-x-5">
        <span className="font-league-gothic uppercase group-hover:md:text-5xl md:text-4xl text-base group-hover:text-lg">
          {t(category)}
        </span>
        {categoriesDictionary[category](
          "w-[20px] h-[20px] md:w-[38px] md:h-[38px] group-hover:w-[27px] group-hover:h-[27px] group-hover:md:w-[44px] group-hover:md:h-[38px]"
        )}
      </div>
    </div>
  );
};

export default CategoryBarElement;
