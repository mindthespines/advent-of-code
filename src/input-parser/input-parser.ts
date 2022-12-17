import fsPromises from "fs/promises";
import path from "path";

import { StrategyGuide, RoundChoices } from "../types";

export class InputParser {
  contentString = "";
  day01Data: Array<number[]> = [[]];
  day02Data: StrategyGuide = [["A", "X"]];

  async setContentStringFromFile(fileName: string): Promise<void> {
    try {
      const filePath = path.join(__dirname, fileName);
      const data = await fsPromises.readFile(filePath);
      this.contentString = data.toString().trim();
    } catch (error) {
      console.error(error);
    }
  }

  async setDay01Data(): Promise<void> {
    function getCalorieArray(calString: string): number[] {
      const splitPerFood = calString.trim().split("\n");
      return splitPerFood.map((food) => Number(food));
    }

    try {
      await this.setContentStringFromFile("day-01-input.txt");
      const splitPerElf = this.contentString.split("\n\n");
      this.day01Data = splitPerElf.map((calString) =>
        getCalorieArray(calString)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async setDay02Data(): Promise<void> {
    try {
      await this.setContentStringFromFile("day-02-input.txt");
      const splitPerRound = this.contentString.split("\n");
      this.day02Data = splitPerRound.map(
        (round) => round.split(" ") as RoundChoices
      );
    } catch (error) {
      console.error(error);
    }
  }
}
