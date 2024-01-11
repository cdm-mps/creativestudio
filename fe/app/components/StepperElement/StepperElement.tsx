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
    <div className="flex items-start md:gap-[14px] gap-2">
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-2.5",
          !isActive && "opacity-50"
        )}
      >
        {withIcon ? (
          <Avatar className="ml-5 w-7" />
        ) : (
          <>
            <div
              className={clsx(
                `md:text-2xl text-lg h-10 w-10 flex items-center justify-center rounded-full`,
                isActive && `bg-${category}`
              )}
            >
              {index}
            </div>
            <p className="text-center text-sm uppercase">{text}</p>
          </>
        )}
      </div>
      {!isLast && <Splitter className="mt-5" />}
    </div>
  );
};

export default StepperElement;
