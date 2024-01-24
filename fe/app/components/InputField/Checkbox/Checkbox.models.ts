import { Category } from "@model/Category";

export interface CheckboxProps {
  category: Category;
  label: string;
  isChecked: boolean;
  updateCheckboxStatus: () => void;
}
