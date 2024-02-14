export const isDateInPast = (value: string): boolean => {
  const date = new Date(value);
  const currentDate = new Date();
  return date < currentDate;
};
