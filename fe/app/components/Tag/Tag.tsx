import { TagProps } from "./Tag.models";

export const Tag = ({ label, category }: TagProps) => {
  return (
    <div className={`flex h-fit rounded-lg border-2 border-${category} p-2`}>
      <span className={`font-league-gothic text-xl uppercase text-${category}`}>
        {label}
      </span>
    </div>
  );
};
