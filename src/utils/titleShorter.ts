// format category name
export const titleShorter = (name: string): string => {
  if (name && name.length > 20) {
    return name.slice(0, 20) + "...";
  }
  return name;
};
