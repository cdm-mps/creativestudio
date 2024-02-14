import { EnumBulletPointProps } from "@components/EnumBulletPoint/EnumBulletPoint.models";

const EnumBulletPoint = ({ index, category }: EnumBulletPointProps) => {
  return (
    <div
      className={`w-8 h-8 border-[2px] md:w-[52px] md:h-[52px] md:border-[3px] border-${category} flex justify-center items-center`}
    >
      <span className={`font-noto-sans font-extrabold text-${category} md:text-2xl`}>
        {index}
      </span>
    </div>
  );
};

export default EnumBulletPoint;
