"use client";

import { ButtonProps } from "@components/Button/Button.models";
import Loader from "@components/shared/Loader/Loader";

const Button = ({
  category,
  label,
  onClick,
  isLoading = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <div className="relative w-[229px] h-[38px] md:w-[329px] md:h-[63px]">
      {isDisabled && (
        <div className="absolute z-10 bg-black/50 w-full h-full" />
      )}
      <button
        onClick={onClick}
        disabled={isLoading || isDisabled}
        className={`bg-${category} text-xl md:text-4xl font-league-gothic flex items-center justify-center md:gap-3 gap-2 w-[229px] h-[38px] md:w-[329px] md:h-[63px]`}
      >
        {label}
        {isLoading && <Loader />}
      </button>
    </div>
  );
};

export default Button;
