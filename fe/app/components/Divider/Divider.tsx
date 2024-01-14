import { DividerProps } from "@/app/components/Divider/Divider.models";

const Divider = ({
  category,
  orientation = "horizontal",
  className = "",
}: DividerProps) => {
  return orientation === "horizontal" ? (
    <hr className={`w-full border-${category || "white"} ${className}`} />
  ) : (
    <div
      className={`w-[1px] self-stretch bg-${category || "white"} ${className}`}
    />
  );
};

export default Divider;
