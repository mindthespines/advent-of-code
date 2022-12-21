import { getDay18Data } from "../input-parser/input-parser";
import { LavaScan, Cube } from "./day-18";

/* prompt: https://adventofcode.com/2022/day/18 */
// gave up partway through part 2, brain not work

describe("day 18 tests", () => {
  it("calculates the surface area of a single cube, small sample", () => {
    const neighbors = [new Cube([2, 1, 1])];
    const testCube = new Cube([1, 1, 1]);
    testCube.setNeighbors(neighbors);
    testCube.calculateCoveredSides();
    const actual = testCube.exposedSides;
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it("calculates the surface area of a single cube, small sample", () => {
    const neighbors = [new Cube([1, 1, 1]), new Cube([1, 1, 2])];
    const testCube = new Cube([2, 1, 1]);
    testCube.setNeighbors(neighbors);
    testCube.calculateCoveredSides();
    const actual = testCube.exposedSides;
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it("calculates the surface area of a single cube, larger sample", () => {
    const neighbors = [
      [1, 2, 2],
      [3, 2, 2],
      [2, 1, 2],
      [2, 3, 2],
      [2, 2, 1],
      [2, 2, 3],
      [2, 2, 4],
      [2, 2, 6],
      [1, 2, 5],
      [3, 2, 5],
      [2, 1, 5],
      [2, 3, 5],
    ].map((cube) => new Cube(cube as [number, number, number]));
    const testCube = new Cube([2, 2, 2]);
    testCube.setNeighbors(neighbors);
    testCube.calculateCoveredSides();
    const actual = testCube.exposedSides;
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  it("calculates the surface area of a small sample lava droplet", () => {
    const sampleLavaScan: Array<[number, number, number]> = [
      [1, 1, 1],
      [2, 1, 1],
    ];
    const testLavaScan = new LavaScan(sampleLavaScan);
    const expected = 10;
    const actual = testLavaScan.surfaceArea;
    expect(actual).toEqual(expected);
  });

  it("calculates the surface area of a larger sample lava droplet", () => {
    const sampleLavaScan: Array<[number, number, number]> = [
      [2, 2, 2],
      [1, 2, 2],
      [3, 2, 2],
      [2, 1, 2],
      [2, 3, 2],
      [2, 2, 1],
      [2, 2, 3],
      [2, 2, 4],
      [2, 2, 6],
      [1, 2, 5],
      [3, 2, 5],
      [2, 1, 5],
      [2, 3, 5],
    ];
    const testLavaScan = new LavaScan(sampleLavaScan);

    const expectedTotal = 64;
    const actualTotal = testLavaScan.surfaceArea;
    expect(actualTotal).toEqual(expectedTotal);

    // part two tests
    // const expectedExterior = 58;
    // const actualExterior = testLavaScan.exteriorSurfaceArea;
    // expect(actualExterior).toEqual(expectedExterior);
  });

  it("solves the part one puzzle", async () => {
    const data = await getDay18Data();
    const lavaScan = new LavaScan(data as Array<[number, number, number]>);
    const expected = 4580;
    const actual = lavaScan.surfaceArea;
    expect(actual).toEqual(expected);
  });
});
