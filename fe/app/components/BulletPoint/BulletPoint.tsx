import { BulletPointProps } from "@/app/components/BulletPoint/BulletPoint.models";

const BulletPoint = ({ category, text }: BulletPointProps) => {
  return (
    <div className="flex md:gap-3 gap-2 items-baseline pt-5">
      <div
        className={`flex-shrink-0 w-2 h-2 md:w-[10px] md:h-[10px] bg-${category}`}
      />
      <p className="text-sm md:text-base font-noto-sans">{text}</p>
    </div>
  );
};

export default BulletPoint;
