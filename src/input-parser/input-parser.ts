import fsPromises from "fs/promises";
import path from "path";

import { StrategyGuide } from "../types";

export async function getDay01Data(): Promise<Array<number[]>> {
  function callback(contentString: string): Array<number[]> {
    return splitOnDoubleNewline(contentString).map((group) =>
      splitOnNewline(group).map((i) => Number(i))
    );
  }

  try {
    const data = await getInputData("day-01-input.txt", callback);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDay02Data(): Promise<StrategyGuide> {
  function callback(contentString: string): StrategyGuide {
    return splitOnNewline(contentString).map(splitOnSpace) as StrategyGuide;
  }

  try {
    const data = await getInputData("day-02-input.txt", callback);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDay03Data(): Promise<string[]> {
  try {
    const data = await getInputData("day-03-input.txt", splitOnNewline);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDay18Data(): Promise<Array<number[]>> {
  function callback(contentString: string): Array<number[]> {
    return splitOnNewline(contentString).map((line) =>
      splitOnComma(line).map((i) => Number(i))
    );
  }

  try {
    const data = await getInputData("day-18-input.txt", callback);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

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

async function getInputData<T>(
  fileName: string,
  callback: (contentString: string) => T
): Promise<T> {
  try {
    const contentString = await getContentStringFromFile(fileName);
    return callback(contentString);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function splitOnNewline(contentString: string): string[] {
  return contentString.trim().split("\n");
}

function splitOnDoubleNewline(contentString: string): string[] {
  return contentString.trim().split("\n\n");
}

function splitOnSpace(contentString: string): string[] {
  return contentString.trim().split(" ");
}

function splitOnComma(contentString: string): string[] {
  return contentString.trim().split(",");
}
