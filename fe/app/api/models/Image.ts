import { ImageProps } from "@components/ImageElement/ImageElement.models";

export type Image = Pick<ImageProps, "src" | "objectPosition"> & {
  title: string;
};
