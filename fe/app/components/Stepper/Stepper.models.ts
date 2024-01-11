import { Category } from "@model/Category";

export interface StepperProps {
  activeStep: 0 | 1 | 2 | 3;
  category: Category;
}
