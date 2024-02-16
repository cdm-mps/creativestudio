import { EnumBulletPointProps } from "@components/EnumBulletPoint/EnumBulletPoint.models";

const EnumBulletPoint = ({ index, category }: EnumBulletPointProps) => {
  return (
    <div
      className={`h-8 w-8 border-[2px] md:h-[52px] md:w-[52px] md:border-[3px] border-${category} flex items-center justify-center`}
    >
      <span
        className={`font-noto-sans font-extrabold text-${category} md:text-2xl`}
      >
        {index}
      </span>
    </div>
  );
};

export default EnumBulletPoint;
