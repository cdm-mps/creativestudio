export interface Option {
  label: string;
  value: string;
}

export interface Filter {
  placeholder: string;
  options: [];
}

export interface FiltersProps {
  filters: Filter[];
  result: Record<string, string | undefined>;
  setResult: (result: {}) => void;
  onClick: () => void;
}
