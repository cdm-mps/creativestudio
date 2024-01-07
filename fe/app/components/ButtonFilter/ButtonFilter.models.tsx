import { Category } from "@model/Category";

export interface ActiveStatusProps {
  isActive: boolean;
  label: string;
}

export interface ButtonFilterProps {
  category: Category;
  filters: ActiveStatusProps[];
  setFilterActiveStatus: (index: number) => void;
}
