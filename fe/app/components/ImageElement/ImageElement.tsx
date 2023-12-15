import Image from "next/image";
import React from "react";
import { ImageProps } from "./ImageElement.models";

const ImageElement = (props: ImageProps) => {
  return (
    <div
      className={`relative ${props.className}`}
    >
      <Image
        alt={props.alt}
        src={props.src}
        layout="fill"
        objectFit="cover"
        objectPosition={props.objectPosition}
      />
    </div>
  );
};

export default ImageElement;
