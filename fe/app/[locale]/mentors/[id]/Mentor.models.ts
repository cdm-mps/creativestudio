import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

interface Image {
  src: string;
  objectPosition: ObjectPosition;
}

interface Event {
  category: Category;
  date: string;
  title: string;
}

export interface MentorProps {
  bio: string;
  image: { src: string; objectPosition: ObjectPosition };
  name: string;
  occupation: string;
  previousEvents?: Event[];
  futureEvents?: Event[];
}
