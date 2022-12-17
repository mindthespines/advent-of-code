import { getArraySum, compareNumsDescending } from "../utils/utils";

export class Elf {
  foodItems: number[];
  totalCaloriesCarried: number;

  constructor(foodItems: number[]) {
    this.foodItems = foodItems;
    this.totalCaloriesCarried = this.calculateTotalCaloriesCarried();
  }

  private calculateTotalCaloriesCarried(): number {
    return getArraySum(this.foodItems);
  }

  private static getSortedCalorieCountsForAllElves(elves: Elf[]): number[] {
    return elves
      .map((elf) => elf.totalCaloriesCarried)
      .sort(compareNumsDescending);
  }

  static getHighestCaloriesInGroup(elves: Elf[]): number {
    return this.getSortedCalorieCountsForAllElves(elves)[0];
  }

  static getThreeHighestCombinedCalories(elves: Elf[]): number {
    const topThree = this.getSortedCalorieCountsForAllElves(elves).slice(0, 3);
    return getArraySum(topThree);
  }
}
