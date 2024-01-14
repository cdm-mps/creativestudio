"use client";

import CategoryElement from "@/app/components/CategoryElement/CategoryElement";
import { useState } from "react";
import { categories } from "@model/Category";

const CategoryGrid = () => {
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
          <CategoryElement category={category} isDisabled={hasEnteredGrid} />
        ))}
      </div>
      <div className="flex max-md:flex-col">
        {cols.map((category) => (
          <CategoryElement
            category={category}
            isDisabled={hasEnteredGrid}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet."
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
