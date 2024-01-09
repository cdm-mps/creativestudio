import { Category } from "@model/Category";

export interface DetailsProps {
  entity: string;
  paymentReference: string;
  descriptive: string;
  amount: number;
  category: Category;
}
