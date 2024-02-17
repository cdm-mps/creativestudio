import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

interface Image {
  category: Category;
  date: string;
  title: string;
}

interface Event {
  category: Category;
  date: string;
  title: string;
}

export interface MentorProps {
  bio: string;
  image: Image;
  name: string;
  occupation: string;
  previousEvents?: Event[];
  futureEvents?: Event[];
}
