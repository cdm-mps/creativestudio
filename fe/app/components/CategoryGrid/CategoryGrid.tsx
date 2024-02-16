"use client";
import CategoryElement from "@/app/components/CategoryElement/CategoryElement";
import { Category, categories } from "@model/Category";
import { Locales } from "@model/Locales";
import { useLocale } from "next-intl";
import { useState } from "react";

const CategoryGrid = ({
  elementDescription,
}: {
  elementDescription?: Record<Category, Record<Locales, string>>;
}) => {
  const locale = useLocale();

  const rows = categories.slice(0, 3);
  const cols = categories.slice(3, 6);
  const [hasEnteredGrid, setHasEnteredGrid] = useState<boolean>(false);

  return (
    <div
      className="flex-col"
      onMouseEnter={() => setHasEnteredGrid(true)}
      onMouseLeave={() => setHasEnteredGrid(false)}
    >
      <div className="flex max-md:flex-col">
        {rows.map((category) => (
          <CategoryElement
            category={category}
            isDisabled={hasEnteredGrid}
            description={elementDescription?.[category][locale as Locales]}
          />
        ))}
      </div>
      <div className="flex max-md:flex-col">
        {cols.map((category) => (
          <CategoryElement
            category={category}
            isDisabled={hasEnteredGrid}
            description={elementDescription?.[category][locale as Locales]}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
