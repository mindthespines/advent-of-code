import { getArraySum } from "../utils/utils";

export class LavaScan {
  surfaceArea: number;
  exteriorSurfaceArea = 58;
  cubes: Cube[];

  constructor(scanData: Array<[number, number, number]>) {
    this.cubes = scanData.map((cubeData) => new Cube(cubeData));
    this.surfaceArea = getArraySum(
      this.cubes.map((cube) => {
        cube.setNeighbors(this.cubes);
        cube.calculateCoveredSides();
        return cube.exposedSides;
      })
    );
    // this.exteriorSurfaceArea = getArraySum(
    //     this.cubes.map((cube) => {
    //         if (!cube.isTrapped(this.cubes)) {
    //             cube.calculateCoveredSides(this.cubes);
    //             return cube.exposedSides;
    //         }
    //         return 0;
    //     })
    // );
  }

  getRanges(): {
    x: [number, number];
    y: [number, number];
    z: [number, number];
  } {
    const xs = this.cubes.map((cube) => cube.x);
    const ys = this.cubes.map((cube) => cube.y);
    const zs = this.cubes.map((cube) => cube.z);

    return {
      x: [Math.min(...xs), Math.max(...xs)],
      y: [Math.min(...ys), Math.max(...ys)],
      z: [Math.min(...zs), Math.max(...zs)],
    };
  }
}

export class Cube {
  x: number;
  y: number;
  z: number;
  exposedSides = 6;
  exteriorSides = 6;
  neighbors: Cube[] = [];

  constructor(cubeData: [number, number, number]) {
    this.x = cubeData[0];
    this.y = cubeData[1];
    this.z = cubeData[2];
  }

  setNeighbors(neighbors: Cube[]): void {
    this.neighbors = neighbors;
  }

  calculateCoveredSides(): void {
    const coveredSides = getArraySum(
      this.neighbors.map((cube) => (this.isAdjacentTo(cube) ? 1 : 0))
    );
    this.exposedSides -= coveredSides;
    this.exteriorSides -= coveredSides;
  }

  calculateInteriorSurfaces(): void {
    const interiorSurfaces = 2;
    this.exteriorSides -= interiorSurfaces;
  }

  private isAdjacentTo(otherCube: Cube): boolean {
    // adjacent cubes will share two coordinates, and the third is one away
    function isOneAway(val1: number, val2: number): boolean {
      return val1 - 1 === val2 || val1 + 1 === val2;
    }

    const shareX = this.x === otherCube.x;
    const shareY = this.y === otherCube.y;
    const shareZ = this.z === otherCube.z;

    if (shareX && shareY) return isOneAway(this.z, otherCube.z);
    if (shareX && shareZ) return isOneAway(this.y, otherCube.y);
    if (shareY && shareZ) return isOneAway(this.x, otherCube.x);

    return false;
  }

  private isExterior(): boolean {
    if (this.exposedSides === 0) return false;

    // check to see if the sides that are exposed touch the outside air
    return true;
  }
}
