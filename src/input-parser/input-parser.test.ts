import { InputParser } from "./input-parser";

describe("input parser tests", () => {
  it("saves input from a text file to a string", async () => {
    const parser = new InputParser();
    await parser.setContentStringFromFile("day-01-input.txt");
    expect(parser.contentString.startsWith("6529")).toBeTruthy();
    expect(parser.contentString.endsWith("8717")).toBeTruthy();
  });

  it("sets up the data to be used for the day one puzzle", async () => {
    const parser = new InputParser();
    await parser.setDay01Data();
    const data = parser.day01Data;
    expect(data[0]).toEqual([
      6529, 8085, 4534, 1503, 2983, 5030, 2135, 5866, 5092, 5059, 1232,
    ]);
    expect(data[data.length - 1]).toEqual([
      8164, 2663, 8024, 9441, 5027, 9077, 6889, 7045, 8717,
    ]);
  });

  it("sets up the data to be used for the day two puzzle", async () => {
    const parser = new InputParser();
    await parser.setDay02Data();
    const data = parser.day02Data;
    expect(data[0]).toEqual(["B", "Y"]);
    expect(data[data.length - 1]).toEqual(["B", "Y"]);
  });
});
