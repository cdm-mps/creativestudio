import { Category } from "@model/Category";

export interface CheckboxGroupProps {
  title: string;
  description?: string;
  category: Category;
  options: { label: string; value: string }[];
  value: string;
  required?: boolean;
  onChangeValue: (value: string) => void;
}
