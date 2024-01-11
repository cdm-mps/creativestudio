import { Category } from "@model/Category";

export interface StepperElementProps {
  category: Category;
  text?: string;
  index?: number;
  isLast?: boolean;
  withIcon?: boolean;
  isActive?: boolean;
}
