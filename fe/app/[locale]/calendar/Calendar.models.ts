import { MentorProps } from "@components/Mentor/Mentor.models";
import { Category } from "@model/Category";

export type CalendarElementProps = {
  mentor: Pick<MentorProps, "name" | "image" | "_id">;
  category: Category;
  title: string;
  previous?: boolean;
  date: string;
  disabled?: boolean;
  _id: string;
};

export interface CalendarProps {
  events: CalendarElementProps[];
}
