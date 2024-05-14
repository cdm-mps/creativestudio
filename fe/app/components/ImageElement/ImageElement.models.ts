import { StaticImageData } from "next/image";

export interface ImageProps {
  src: StaticImageData | string;
  alt: string;
  objectPosition: ObjectPosition;
  rounded?: boolean;
  className?: string;
  blur?: boolean;
}

export type ObjectPosition =
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
