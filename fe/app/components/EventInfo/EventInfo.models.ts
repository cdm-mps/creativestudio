import { Category } from "@model/Category";

export interface EventInfoProps {
  dates: string[];
  level?: string;
  category: Category;
  onClick?: () => void;
}
