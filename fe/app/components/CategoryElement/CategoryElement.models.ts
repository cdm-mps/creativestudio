import { Category } from "@model/Category";

export interface CategoryElementProps {
  category: Category;
  description?: string;
  isDisabled?: boolean;
  size?: "medium" | "small";
}
