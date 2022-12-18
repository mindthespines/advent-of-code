import { getArraySum } from "../utils/utils";

const priorityArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export class Rucksack {
    compartmentOneContents: string[];
    compartmentTwoContents: string[];
    duplicatedItem: string;
    dupePriority: number;

    constructor(contents: string) {
        const halfIdx = contents.length / 2;
        const splitContents = contents.trim().split('');
        this.compartmentOneContents = splitContents.slice(0, halfIdx);
        this.compartmentTwoContents = splitContents.slice(halfIdx);
        this.duplicatedItem = this.findDuplicatedItem();
        this.dupePriority = this.getDupePriority();
    }

    private findDuplicatedItem(): string {
        return this.compartmentOneContents.find((i) => this.compartmentTwoContents.some((j) => j === i)) ?? "";
    }

    private getDupePriority(): number {
        return priorityArray.findIndex((letter) => letter === this.duplicatedItem) + 1;
    }
}

export class RucksackCollection {
    dupePrioritySum: number;

    constructor(rucksacks: Rucksack[]) {
        const priorities = rucksacks.map((rucksack) => rucksack.dupePriority);
        this.dupePrioritySum = getArraySum(priorities);
    }
}
