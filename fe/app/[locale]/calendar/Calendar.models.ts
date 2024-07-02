import { ImageOutputDto } from "@/app/api/models/Image.models";
import { MentorProps } from "@components/Mentor/Mentor.models";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";

export type CalendarElementProps = {
  mentors: {
    _id: string;
    name: string;
    image: { mentor_image: ImageOutputDto };
  }[];
  areasOfInterest: AreaOfInterest[];
  category: Category;
  title: string;
  previous?: boolean;
  date: string[];
  isSoldOut?: boolean;
  disabled?: boolean;
  _id: string;
};

export interface CalendarProps {
  events: CalendarElementProps[];
}
