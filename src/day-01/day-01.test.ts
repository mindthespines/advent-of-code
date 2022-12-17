import { Elf } from "./day-01";
import { getDay01Data } from "../input-parser/input-parser";

/*
prompt: https://adventofcode.com/2022/day/1
*/

async function setUpElves() {
  const allElfData = await getDay01Data();
  return allElfData.map((data) => new Elf(data));
}

describe("day 1 tests", () => {
  it("creates a new Elf and determines how many calories they are carrying", () => {
    const testFoods = [15219, 7137, 2691, 2898, 1798];
    const testElf = new Elf(testFoods);

    const actual = testElf.totalCaloriesCarried;
    const expected = 29743;
    expect(actual).toEqual(expected);
  });

  it("returns the calorie count of the Elf carrying the most calories from a collection of elves", () => {
    const testFoodCollection = [
      [15219, 7137, 2691, 2898, 1798],
      [4684, 4823, 1065, 2276],
      [3186, 12541, 19573],
      [4125, 5353, 6549, 6118, 1294, 1272, 7007, 5572, 4896, 3169, 7709],
    ];
    const testElves = testFoodCollection.map((foods) => new Elf(foods));

    const actual = Elf.getHighestCaloriesInGroup(testElves);
    const expected = 53064;
    expect(actual).toEqual(expected);
  });

  it("returns the calorie count of the Elf with the highest calorie count, and the combined calories of the top three highest", async () => {
    const allElves = await setUpElves();

    const actualSingle = Elf.getHighestCaloriesInGroup(allElves);
    const expectedSingle = 72718;
    expect(actualSingle).toEqual(expectedSingle);

    const actualCombined = Elf.getThreeHighestCombinedCalories(allElves);
    const expectedCombined = 213089;
    expect(actualCombined).toEqual(expectedCombined);
  });
});
