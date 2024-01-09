import { Category } from "@model/Category";
import { StaticImageData } from "next/image";

export interface MentorProps {
  name: string;
  image: { src: StaticImageData; alt: string };
  category?: Category;
  eventCount?: number;
  onClick?: () => void;
}
