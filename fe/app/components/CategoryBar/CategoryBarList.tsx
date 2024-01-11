import CategoryBarElement from "@components/CategoryBar/CatergoryBarElement";
import { Categories, Category } from "@model/Category";
import React from "react";

const CategoryBarList = () => {
  const catRef = React.useRef(null);
  const handleMouseEnter = () => {
    console.log(catRef.current);
  };
  return (
    <div className="w-full flex flex-col gap-y-6">
      {Categories.map((category, i) => {
        return (
          <div key={category} ref={catRef} onMouseEnter={handleMouseEnter}>
            <CategoryBarElement category={category as Category} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBarList;
