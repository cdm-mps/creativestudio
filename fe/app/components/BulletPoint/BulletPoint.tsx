import { BulletPointProps } from "@/app/components/BulletPoint/BulletPoint.models";

const BulletPoint = ({ category, text }: BulletPointProps) => {
  return (
    <div className="flex sm:gap-3 gap-2 items-baseline pt-5">
      <div
        className={`flex-shrink-0 w-2 h-2 sm:w-[10px] sm:h-[10px] bg-${category}`}
      />
      <p className="text-xs sm:text-base">{text}</p>
    </div>
  );
};

export default BulletPoint;
