export const sum = (number1: number, number2: any): number | null => {
  if (number2 < 0) {
    return null;
  }
  return number1 + number2;
};
