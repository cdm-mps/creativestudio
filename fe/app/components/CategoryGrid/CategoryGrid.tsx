"use client";

import CategoryElement from "@/app/components/CategoryElement/CategoryElement";
import { useEffect, useState } from "react";

const CategoryGrid = () => {
  const [hasEnteredGrid, setHasEnteredGrid] = useState<boolean>(false);

  useEffect(() => {
    console.log({ hasEnteredGrid });
  }, [hasEnteredGrid]);
  return (
    <div
      className="flex-col"
      onMouseEnter={() => setHasEnteredGrid(true)}
      onMouseLeave={() => setHasEnteredGrid(false)}
    >
      <div className="flex">
        <CategoryElement
          category="edition"
          isDisabled={hasEnteredGrid}
          description="This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh. This is a fake text bruh."
        />
        <CategoryElement
          category="masterclass"
          isDisabled={hasEnteredGrid}
          description="This is a fake text bruh. This is a fake text bruh."
        />
        <CategoryElement
          category="creative-talks"
          isDisabled={hasEnteredGrid}
          description="This is a fake text bruh. This is a fake text bruh."
        />
      </div>
      <div className="flex">
        <CategoryElement
          category="workshop"
          isDisabled={hasEnteredGrid}
          description="This is a fake text bruh. This is a fake text bruh."
        />
        <CategoryElement
          category="artistic-residence"
          isDisabled={hasEnteredGrid}
          description="This is a fake text bruh. This is a fake text bruh."
        />
        <CategoryElement
          category="business-workshop"
          isDisabled={hasEnteredGrid}
          description="This is a fake text bruh. This is a fake text bruh."
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
