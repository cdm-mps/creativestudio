import { Category } from "@model/Category";

export interface LabelProps {
  title: string;
  description?: string;
  category: Category;
  required?: boolean;
}
