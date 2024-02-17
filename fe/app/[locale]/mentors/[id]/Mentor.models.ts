import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

interface Image {
  src: string;
  objectPosition: ObjectPosition;
}

interface Event {
  _id: string;
  category: Category;
  date: string;
  title: string;
}

export interface MentorProps {
  _id: string;
  bio: string;
  image: Image;
  name: string;
  occupation: string;
  previousEvents?: Event[];
  futureEvents?: Event[];
}
