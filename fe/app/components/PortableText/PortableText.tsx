// components/PortableTextComponent.tsx
import {
  CustomBlockProps,
  LinkProps,
} from "@components/PortableText/PortableText.models";
import { Category } from "@model/Category";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import clsx from "clsx";
import React from "react";

const customComponents = (category?: Category) => {
  return {
    block: {
      h1: ({ children }: CustomBlockProps) => (
        <h1
          className={clsx(
            "my-8 font-league-gothic text-5xl",
            category ? `text-${category}` : "text-white",
          )}
        >
          {children}
        </h1>
      ),
      h3: ({ children }: CustomBlockProps) => (
        <h3 className="mb-3 mt-6 font-league-gothic text-3xl">{children}</h3>
      ),
      normal: ({ children }: CustomBlockProps) => (
        <p className="my-2 font-league-gothic text-2xl">{children}</p>
      ),
    },
    marks: {
      em: ({ children }: CustomBlockProps) => (
        <em className="pr-1">{children}</em>
      ),
      underline: ({ children }: CustomBlockProps) => <u>{children}</u>,
      link: ({ children, value }: LinkProps) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "underline",
            category ? `text-${category}` : "text-white",
          )}
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }: CustomBlockProps) => (
        <ul className="list-disc pl-12">{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }: CustomBlockProps) => (
        <li className="font-league-gothic text-2xl">{children}</li>
      ),
    },
  };
};

interface PortableTextComponentProps {
  value: PortableTextBlock[];
  category?: Category;
}

const PortableTextComponent: React.FC<PortableTextComponentProps> = ({
  value,
  category,
}) => {
  //@ts-expect-error
  return <PortableText value={value} components={customComponents(category)} />;
};

export default PortableTextComponent;
