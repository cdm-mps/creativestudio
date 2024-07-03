export interface CustomBlockProps {
  children: React.ReactNode;
}

export interface LinkProps extends CustomBlockProps {
  value?: {
    href: string;
  };
}
