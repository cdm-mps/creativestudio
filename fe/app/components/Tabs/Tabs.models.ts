import { Category } from "@model/Category";

export interface TabsProps {
  tabs: string[];
  category: Category;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}
