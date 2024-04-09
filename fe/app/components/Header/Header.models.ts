import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { TabsProps } from "antd";
import { PropsWithChildren } from "react";

export interface HeaderProps {
  highlight?: string;
  image?: ImageProps;
  description: string;
}
