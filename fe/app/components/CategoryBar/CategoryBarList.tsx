import CategoryBarElement from "@components/CategoryBar/CatergoryBarElement";
import { Categories, Category } from "@model/Category";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const CategoryBarList = () => {
  const locale = useLocale();
  return (
    <div className="w-full flex flex-col gap-y-6">
      {Categories.map((category, i) => {
        return (
          <Link
            key={category}
            href={`/${locale}/creative-workshops/${category}`}
          >
            <CategoryBarElement category={category as Category} />
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryBarList;
