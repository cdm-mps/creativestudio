import CategoryBarElement from "@components/CategoryBar/CatergoryBarElement";
import { Categories, Category } from "@model/Category";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const CategoryBarList = () => {
  const locale = useLocale();
  const [hovered, setHovered] = React.useState<Category | undefined>(undefined);

  return (
    <div className="w-full flex flex-col gap-2 md:gap-6">
      {Categories.map((category, i) => {
        return (
          <Link
            className={`${
              hovered &&
              hovered !== category &&
              "md:opacity-60 md:transition-opacity md:duration-200 md:ease-in-out"
            }`}
            key={category + "_" + i}
            href={`/${locale}/creative-workshops/${category}`}
            onMouseEnter={() => setHovered(category)}
            onMouseLeave={() => setHovered(undefined)}
          >
            <CategoryBarElement category={category as Category} />
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryBarList;