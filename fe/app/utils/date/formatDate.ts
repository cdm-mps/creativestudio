export const formatDate = (
  value: string,
): { day: string; month: string; year: string } => {
  const date = new Date(value);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date.toLocaleString("default", { month: "short" }).replace(".", ""),
    year: date.getFullYear().toString(),
  };
};
