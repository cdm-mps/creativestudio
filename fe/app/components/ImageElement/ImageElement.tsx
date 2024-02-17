import Image from "next/image";
import React from "react";
import { ImageProps } from "./ImageElement.models";
import clsx from "clsx";

const ImageElement = (props: ImageProps) => {
  return (
    <div
      className={clsx(
        `relative ${props.className}`,
        props.rounded && "overflow-hidden rounded-[50%]",
      )}
    >
      <Image
        alt={props.alt}
        src={props.src}
        fill
        style={{ objectFit: "cover", objectPosition: props.objectPosition }}
      />
    </div>
  );
};

export default ImageElement;
