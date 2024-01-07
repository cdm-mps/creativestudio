export interface QuoteElementProps {
  container?: { className: string };
  text: {
    content: React.JSX.Element;
    author?: string;
  };
}

export interface QuoteSliderProps {
  elements: QuoteElementProps[];
}
