import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { Locales } from "@model/Locales";

export interface MentorElement {
  name: string;
  image: {
    mentor_image: {
      src: string;
      objectPosition: ObjectPosition;
      title: string;
    };
  };
  event: { eventCount: number };
  _id: string;
}

export interface Mentors {
  description: Record<Locales, string>;
  mentors: MentorElement[];
}
