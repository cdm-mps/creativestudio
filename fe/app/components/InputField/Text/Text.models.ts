import { Category } from "@model/Category";

export interface TextProps {
  title: string;
  description?: string;
  value: string;
  required?: boolean;
  category: Category;
  onChangeValue: (value: string) => void;
  hasError?: boolean;
}
