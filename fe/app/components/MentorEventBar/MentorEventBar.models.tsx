import { MentorProps } from "@components/Mentor/Mentor.models";
import { Category } from "@model/Category";

export interface MentorEventBarProps {
  mentor: Pick<MentorProps, "name" | "image">;
  category: Category;
  title: string;
  past?: boolean;
  date: Date;
  onClick: () => void;
}
