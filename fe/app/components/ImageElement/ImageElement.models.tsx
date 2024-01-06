import { StaticImageData } from "next/image";

export interface ImageProps {
  src: StaticImageData;
  alt: string;
  objectPosition: ObjectPosition;
  className?: string;
}

type ObjectPosition =
  | "bottom"
  | "center"
  | "center top"
  | "left"
  | "left bottom"
  | "left top"
  | "right"
  | "right bottom"
  | "right top"
  | "top";
