import { ImageProps } from "@components/ImageElement/ImageElement.models";

export type Sponsor = Pick<ImageProps, "src" | "alt">;

export interface SponsorsProps {
  [x: string]: any;
  sponsors: Sponsor[];
}
