import { getDay03Data } from "../input-parser/input-parser";
import { Rucksack, RucksackCollection } from "./day-03";

/* prompt: https://adventofcode.com/2022/day/3 */

async function setUpRucksacks() {
  const data = await getDay03Data();
  return data;
}

describe("day 3 tests", () => {
  it("gets the sum of the priorities of the duplicated items in each rucksack", () => {
    const sampleRuckSackContents = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ];
    const sampleRucksacks = sampleRuckSackContents.map(
      (contents) => new Rucksack(contents)
    );
    const collection = new RucksackCollection(sampleRucksacks);
    const actual = collection.dupePrioritySum;
    const expected = 157;
    expect(actual).toEqual(expected);
  });

  it("gets the sum of the priorities of the duplicated items and the sum of the priorities of each group's badges in each rucksack from the input", async () => {
    const rucksackContents = await setUpRucksacks();
    const rucksacks = rucksackContents.map(
      (contents) => new Rucksack(contents)
    );
    const collection = new RucksackCollection(rucksacks);

    const actualDupe = collection.dupePrioritySum;
    const expectedDupe = 8053;
    expect(actualDupe).toEqual(expectedDupe);

    const actualBadge = collection.badgePrioritySum;
    const expectedBadge = 2425;
    expect(actualBadge).toEqual(expectedBadge);
  });
});
