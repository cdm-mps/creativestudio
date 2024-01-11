import { EnumBulletPointProps } from "@components/EnumBulletPoint/EnumBulletPoint.models";
import { Category } from "@model/Category";

export interface ScheduleProps {
  title: string;
  duration: string;
  category: Category;
  bullet: Pick<EnumBulletPointProps, "index">;
}
