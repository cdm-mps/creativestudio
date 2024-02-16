import { Category } from "@model/Category";

export interface RadioButtonProps {
  category: Category;
  option: { label: string; value: string };
  isChecked: boolean;
  onClick: (value: string) => void;
}
