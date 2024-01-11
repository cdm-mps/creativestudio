import { Category } from "@model/Category";

export interface CategoryBarProps {
  category: Category;
  onClick?: () => void;
}
