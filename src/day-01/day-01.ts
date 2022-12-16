export class Elf {
  foodItems: number[];
  totalCaloriesCarried: number;

  constructor(foodItems: number[]) {
  	this.foodItems = foodItems;
  	this.totalCaloriesCarried = this.calculateTotalCalories();
  }

  private calculateTotalCalories(): number {
    return this.foodItems.reduce((acc, current) => {
      return acc + current;
    }, 0);
  }

  static getHighestCaloriesInGroup(elves: Elf[]): number {
  	const calorieMap = elves.map((elf) => elf.totalCaloriesCarried);
  	return Math.max.apply(null, calorieMap);
  }
}
