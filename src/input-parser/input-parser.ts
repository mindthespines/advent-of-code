import fsPromises from "fs/promises";
import path from "path";

export class InputParser {
  contentString = "";
  day01Data: number[][] = [[]];

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
}
