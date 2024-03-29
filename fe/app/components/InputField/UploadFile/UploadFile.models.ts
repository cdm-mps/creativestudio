import { Category } from "@model/Category";

export interface UploadFileProps {
  title: string;
  description?: string;
  category: Category;
  required?: boolean;
  hasError?: boolean;
  onChangeValue: (value: any) => void;
}
