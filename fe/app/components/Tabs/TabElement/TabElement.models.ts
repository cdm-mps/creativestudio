import { Category } from "@model/Category";

export interface TabElementProps {
  label: string;
  category: Category;
  selected?: boolean;
  className?: string;
  onClick: () => void;
}
