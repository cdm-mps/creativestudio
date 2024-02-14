import { ObjectPosition } from "@components/ImageElement/ImageElement.models";

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
    description: { pt: string; en: string };
    mentors: MentorElement[];
  }
  