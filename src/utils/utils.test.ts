import { getArraySum, compareNumsDescending } from "./utils";

describe("utils tests", () => {
  it("sums up numbers in an array", () => {
    const actual = getArraySum([1, 2, 3]);
    const expected = 6;
    expect(actual).toEqual(expected);
  });
  it("returns a positive int if b is larger than a", () => {
    const actual = compareNumsDescending(1, 14);
    expect(actual > 0).toBe(true);
  });
  it("returns a negative int if a is larger than b", () => {
    const actual = compareNumsDescending(435, 87);
    expect(actual < 0).toBe(true);
  });
});
