export function getArraySum(arr: number[]): number {
  return arr.reduce((acc, current) => acc + current, 0);
}

export function compareNumsDescending(a: number, b: number): number {
  return b - a;
}
