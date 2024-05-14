"use client";

import { ButtonProps } from "@components/Button/Button.models";
import Loader from "@components/shared/Loader/Loader";
import clsx from "clsx";

const Button = ({
  category,
  label,
  onClick,
  isLoading = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <div
      className={clsx(
        "relative h-[38px] w-[229px] md:h-[63px] md:w-[329px]",
        !isDisabled && !isLoading && "hover:opacity-80",
      )}
    >
      {isDisabled && (
        <div className="absolute z-10 h-full w-full bg-black/70" />
      )}
      <button
        onClick={onClick}
        disabled={isLoading || isDisabled}
        className={`bg-${category} flex h-[38px] w-[229px] items-center justify-center gap-2 font-league-gothic text-xl uppercase md:h-[63px] md:w-[329px] md:gap-3 md:text-4xl`}
      >
        {label}
        {isLoading && <Loader />}
      </button>
    </div>
  );
};

export default Button;
