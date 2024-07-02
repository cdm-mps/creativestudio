export const isDateInPast = (value: string[]): boolean => {
  if (!value.length) {
    return true;
  }
  const date = new Date(value[0]);
  const currentDate = new Date();
  return date < currentDate;
};
