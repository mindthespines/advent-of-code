import { getArraySum } from "../utils/utils";

const priorityArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

export class Rucksack {
    contents: string[];
    compartmentOneContents: string[];
    compartmentTwoContents: string[];
    duplicatedItem: string;
    dupePriority: number;

    constructor(contents: string) {
        const halfIdx = contents.length / 2;
        this.contents = contents.trim().split("");
        this.compartmentOneContents = this.contents.slice(0, halfIdx);
        this.compartmentTwoContents = this.contents.slice(halfIdx);
        this.duplicatedItem = this.findDuplicatedItem();
        this.dupePriority = this.getDupePriority();
    }

    private findDuplicatedItem(): string {
        return (
            this.compartmentOneContents.find((i) =>
                this.compartmentTwoContents.some((j) => j === i)
            ) ?? ""
        );
    }

    private getDupePriority(): number {
        return (
            priorityArray.findIndex((letter) => letter === this.duplicatedItem) + 1
        );
    }
}

export class RucksackCollection {
    rucksacks: Rucksack[];
    dupePrioritySum: number;
    groupsOfElves: Array<ElfRucksackGroup> = [];
    badgePrioritySum: number;

    constructor(rucksacks: Rucksack[]) {
        this.rucksacks = rucksacks;
        const priorities = this.rucksacks.map((rucksack) => rucksack.dupePriority);
        this.dupePrioritySum = getArraySum(priorities);
        this.setElfGroups();
        const badgePriorities = this.groupsOfElves.map((group) => group.badgePriority);
        this.badgePrioritySum = getArraySum(badgePriorities);
    }

    private setElfGroups() {
        const numberOfGroups = this.rucksacks.length / 3;
        for (let i = 0; i < numberOfGroups; i++) {
            const currentGroup: Rucksack[] = [];
            for (let j = 0; j < 3; j++) {
                currentGroup.push(this.rucksacks.shift() as Rucksack);
            }
            this.groupsOfElves.push(new ElfRucksackGroup(currentGroup as [Rucksack, Rucksack, Rucksack]));
        }
    }
}

class ElfRucksackGroup {
    rucksacks: [Rucksack, Rucksack, Rucksack];
    badge: string;
    badgePriority: number;

    constructor(rucksacks: [Rucksack, Rucksack, Rucksack]) {
        this.rucksacks = rucksacks;
        this.badge = this.findBadge();
        this.badgePriority = this.getBadgePriority();
    }

    private findBadge(): string {
        return (
            this.rucksacks[0].contents.find((i) =>
                this.rucksacks[1].contents.some((j) => j === i) && this.rucksacks[2].contents.some((k) => k === i)
            ) ?? ""
        );
    }

    private getBadgePriority(): number {
        return (
            priorityArray.findIndex((letter) => letter === this.badge) + 1
        );
    }
}
