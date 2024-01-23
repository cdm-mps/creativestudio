import { Category } from "@model/Category";

export interface RadioButtonProps {
  category: Category;
  label: string;
  isChecked: boolean;
  updateRadioButtonStatus: () => void;
}
