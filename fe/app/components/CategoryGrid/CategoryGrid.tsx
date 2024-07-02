"use client";
import CategoryElement from "@/app/components/CategoryElement/CategoryElement";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { useLocale } from "next-intl";
import { CategoryGridProps } from "./CategoryGrid.models";

const CategoryGrid = ({ elements }: CategoryGridProps) => {
  const locale = useLocale();
  return (
    <div className="group flex flex-col justify-center lg:flex-row lg:flex-wrap">
      {Object.keys(elements).map((key, i) => (
        <CategoryElement
          key={i}
          size="medium"
          category={key as Category}
          description={elements[key as Category][locale as Locales]}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
