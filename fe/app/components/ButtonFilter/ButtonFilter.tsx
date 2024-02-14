"use client";

import { ButtonFilterProps } from "@components/ButtonFilter/ButtonFilter.models";
import ButtonFilterElement from "@components/ButtonFilterElement/ButtonFilterElement";

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
          onClick={() =>
            isActive ? setFilterActiveStatus(-1) : setFilterActiveStatus(index)
          }
        />
      ))}
    </div>
  );
};

export default ButtonFilter;
