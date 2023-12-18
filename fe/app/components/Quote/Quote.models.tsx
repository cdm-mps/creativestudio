export interface QuoteElementProps {
  container?: { className?: string };
  text: {
    className?: string;
    content: string;
    author: string;
  };
}
