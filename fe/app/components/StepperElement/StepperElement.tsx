import { StepperElementProps } from "@components/StepperElement/StepperElement.models";
import { Avatar } from "@icons/Avatar";
import { Splitter } from "@icons/Splitter";
import clsx from "clsx";

const StepperElement = ({
  text,
  index,
  category,
  isActive = false,
  isLast = false,
  withIcon = false,
}: StepperElementProps) => {
  return (
    <div className="flex cursor-default items-start gap-2 md:gap-[14px]">
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-2.5",
          !isActive && "opacity-50",
        )}
      >
        {withIcon ? (
          <Avatar className="ml-5 w-7" />
        ) : (
          <>
            <div
              className={clsx(
                `flex h-10 w-10 cursor-default items-center justify-center rounded-full text-lg md:text-2xl`,
                isActive && `bg-${category}`,
              )}
            >
              {index}
            </div>
            <p className="cursor-default text-center text-sm uppercase">
              {text}
            </p>
          </>
        )}
      </div>
      {!isLast && <Splitter className="mt-5" />}
    </div>
  );
};

export default StepperElement;
