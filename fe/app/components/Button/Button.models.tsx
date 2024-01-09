import { Category } from "@model/Category";

export interface ButtonProps {
  label: string;
  category: Category;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}
