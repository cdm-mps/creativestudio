"use client";

import ButtonFilterElement from "../ButtonFilterElement/ButtonFilterElement";
import { ButtonFilterProps } from "./ButtonFilter.models";

const ButtonFilter = ({
  category,
  filters,
  setFilterActiveStatus,
}: ButtonFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {filters.map(({ label, isActive }, index) => (
        <ButtonFilterElement
          key={label}
          category={category}
          label={label}
          isActive={isActive}
          onClick={() => setFilterActiveStatus(index)}
        />
      ))}
    </div>
  );
};

export default ButtonFilter;
