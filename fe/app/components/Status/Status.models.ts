import { Category } from "@model/Category";

export type Status = "available" | "soldOut" | "occurred" | "onGoing";

export interface StatusProps {
  status: Status;
  category: Category;
}
