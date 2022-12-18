// Day 02 Types
export type PlayerChoice = "A" | "B" | "C";
export type DesiredOutcome = "X" | "Y" | "Z";
export type RoundStrategy = [PlayerChoice, DesiredOutcome];
export type StrategyGuide = Array<RoundStrategy>;
export interface RoundScores {
  playerAScore: number;
  playerBScore: number;
}
export enum Shape {
  rock = "A",
  paper = "B",
  scissors = "C",
}
export enum Outcome {
  lose = "X",
  draw = "Y",
  win = "Z",
}
