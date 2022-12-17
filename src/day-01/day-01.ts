export class Elf {
  foodItems: number[];
  totalCaloriesCarried: number;

  constructor(foodItems: number[]) {
    this.foodItems = foodItems;
    this.totalCaloriesCarried = this.calculateTotalCaloriesCarried();
  }

  private calculateTotalCaloriesCarried(): number {
    return this.foodItems.reduce((acc, current) => {
      return acc + current;
    }, 0);
  }

  private static getSortedCalorieCountsForAllElves(elves: Elf[]): number[] {
    function compareDescending(a: number, b: number) {
      return b - a;
    }

    return elves.map((elf) => elf.totalCaloriesCarried).sort(compareDescending);
  }

  static getHighestCaloriesInGroup(elves: Elf[]): number {
    return this.getSortedCalorieCountsForAllElves(elves)[0];
  }

  static getThreeHighestCombinedCalories(elves: Elf[]): number {
    const topThree = this.getSortedCalorieCountsForAllElves(elves).slice(0, 3);
    return topThree.reduce((acc, current) => {
      return acc + current;
    }, 0);
  }
}
