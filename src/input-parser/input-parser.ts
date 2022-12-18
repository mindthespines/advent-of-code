import fsPromises from "fs/promises";
import path from "path";

import { StrategyGuide, RoundStrategy } from "../types";

export async function getContentStringFromFile(
  fileName: string
): Promise<string> {
  try {
    const filePath = path.join(__dirname, fileName);
    const data = await fsPromises.readFile(filePath);
    return data.toString().trim();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDay01Data(): Promise<Array<number[]>> {
  function getCalorieArray(calString: string): number[] {
    const splitPerFood = calString.trim().split("\n");
    return splitPerFood.map((food) => Number(food));
  }
  try {
    const contentString = await getContentStringFromFile("day-01-input.txt");
    const splitPerElf = contentString.split("\n\n");
    return splitPerElf.map((calString) => getCalorieArray(calString));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDay02Data(): Promise<StrategyGuide> {
  try {
    const contentString = await getContentStringFromFile("day-02-input.txt");
    const splitPerRound = contentString.split("\n");
    return splitPerRound.map((round) => round.split(" ") as RoundStrategy);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDay03Data(): Promise<string[]> {
  try {
    const contentString = await getContentStringFromFile("day-03-input.txt");
    return contentString.split("\n");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
