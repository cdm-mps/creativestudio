import { Category } from "@model/Category";

export interface EventInfoProps {
  date: string;
  duration: string;
  level?: string;
  category: Category;
  onClick?: () => void;
}
