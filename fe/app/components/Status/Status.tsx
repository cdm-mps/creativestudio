import { Tag } from "@components/Tag/Tag";
import { useTranslations } from "next-intl";
import { StatusProps } from "./Status.models";
import clsx from "clsx";

const Status = ({ status, category }: StatusProps) => {
  const t = useTranslations("Components.Status");

  const isOnGoing = status === "onGoing";
  return (
    <div
      className={clsx(
        "flex items-center gap-2 md:gap-4",
        status === "onGoing" && "animate-pulse",
      )}
    >
      <div
        className={clsx(
          `h-4 w-4 rounded-full md:h-6 md:w-6 bg-${isOnGoing ? category : status}`,
        )}
      />
      <Tag
        label={t(status)}
        size="medium"
        category={isOnGoing ? category : undefined}
      />
    </div>
  );
};

export default Status;
