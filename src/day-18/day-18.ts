import { getArraySum } from "../utils/utils";

export class LavaScan {
    surfaceArea: number;
    cubes: Cube[];

    constructor(scanData: Array<[number, number, number]>) {
        this.cubes = scanData.map((cubeData) => new Cube(cubeData));
        this.surfaceArea = getArraySum(this.cubes.map((cube) => {
            cube.calculateCoveredSides(this.cubes);
            return cube.exposedSides
        }));
    }
}

export class Cube {
    x: number;
    y: number;
    z: number;
    exposedSides: number = 6;

    constructor(cubeData: [number, number, number]) {
        this.x = cubeData[0];
        this.y = cubeData[1];
        this.z = cubeData[2];
    }

    calculateCoveredSides(neighbors: Cube[]) {
        const coveredSides = getArraySum(neighbors.map((cube) => this.isAdjacent(cube) ? 1 : 0));
        this.exposedSides -= coveredSides;
    }

    private isAdjacent(cube: Cube): boolean {
        // adjacent cubes will share two coordinates, and the third is one away
        function isOneAway(val1: number, val2: number): boolean {
            return val1 - 1 === val2 || val1 + 1 === val2;
        }

        const shareX = this.x === cube.x;
        const shareY = this.y === cube.y;
        const shareZ = this.z === cube.z;

        if (shareX && shareY) return isOneAway(this.z, cube.z);
        if (shareX && shareZ) return isOneAway(this.y, cube.y);
        if (shareY && shareZ) return isOneAway(this.x, cube.x);

        return false;
    }
}