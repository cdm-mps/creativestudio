import { Category } from "@model/Category";

type DateInfoSize = 'sm' | 'lg';

export interface DateInfoProps {
  date: string;
  category?: Category;
  size: DateInfoSize;
}
