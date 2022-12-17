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
  });
});
