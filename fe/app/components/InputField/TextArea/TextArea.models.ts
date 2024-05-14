import { Category } from "@model/Category";

export interface TextAreaProps {
  title: string;
  description?: string;
  value: string;
  category: Category;
  required?: boolean;
  hasError?: boolean;
  onChangeValue: (value: string) => void;
}
