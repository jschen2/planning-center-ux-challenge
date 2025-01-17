export const dateFormat = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
}
