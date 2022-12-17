// Day 02 Types
export type PlayerAChoice = "A" | "B" | "C";
export type PlayerBChoice = "X" | "Y" | "Z";
export type RoundChoices = [PlayerAChoice, PlayerBChoice];
export type StrategyGuide = Array<RoundChoices>;
export interface RoundScores {
  playerAScore: number;
  playerBScore: number;
}
