import { Category } from "@model/Category";

export interface ButtonFilterElementProps {
  label: string;
  category: Category;
  isActive: boolean;
  onClick: () => void;
}
