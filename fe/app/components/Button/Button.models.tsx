import { Category } from "@model/Category";

export interface ButtonProps {
  label: string;
  category: Category;
  isLoading?: boolean;
}
