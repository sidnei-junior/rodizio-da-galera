import { sum } from "./math";

describe("math methods", () => {
  it("should return correct value to a sum", () => {
    const n1 = 2;
    const n2 = 3;

    const result = sum(n1, n2);
    expect(result).toBe(n1 + n2);
  });

  it("should return null if second installment is negative", () => {
    let n1 = 3;
    let n2 = -1;

    const firstResult = sum(n1, n2);
    expect(firstResult).toBeNull();

    n1 = -1;
    n2 = 3;

    const secondResult = sum(n1, n2);
    expect(secondResult).toBe(2);
  });
});
