export interface CustomBlockProps {
  children: React.ReactNode;
}

export interface LinkMarkProps extends CustomBlockProps {
  value?: {
    href: string;
  };
}
