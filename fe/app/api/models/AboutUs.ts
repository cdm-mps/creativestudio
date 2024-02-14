import { ObjectPosition } from "@components/ImageElement/ImageElement.models";

export interface TeamElement {
  name: string;
  role: { pt: string; en: string };
  image: {
    teamElement_image: {
      src: string;
      objectPosition: ObjectPosition;
      title: string;
    };
  };
}

export interface AboutUs {
  highlight: { pt: string; en: string };
  description: { pt: string; en: string };
  team: TeamElement[];
}
