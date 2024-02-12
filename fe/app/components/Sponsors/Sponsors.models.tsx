import { ImageProps } from "@components/ImageElement/ImageElement.models";

export type Sponsor = Pick<ImageProps, "src" | "alt">;

export interface SponsorsProps {
  sponsors: Sponsor[];
}
