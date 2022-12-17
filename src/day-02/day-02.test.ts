import { Game, Round } from "./day-02";
import { StrategyGuide, RoundChoices } from "../types";
import { InputParser } from "../input-parser/input-parser";

/*
puzzle at https://adventofcode.com/2022/day/2
*/

async function setUpStrategy() {
  const parser = new InputParser();
  await parser.setDay02Data();
  return parser.day02Data;
}

describe("day 02 tests", () => {
  it("correctly calculates the points earned in a given round", () => {
    const testChoices: RoundChoices = ["A", "Y"];
    const round = new Round(testChoices);
    const actual = round.playRound();
    const expected = { playerAScore: 1, playerBScore: 8 };
    expect(actual).toEqual(expected);
  });
  it("calculates my final rock paper scissors score per a strategy guide", () => {
    const strategyGuide: StrategyGuide = [
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ];
    const testGame = new Game(strategyGuide);
    testGame.calculateScores();
    const actual = testGame.playerBTotal;
    const expected = 15;
    expect(actual).toEqual(expected);
  });
  it("calculates my final rock paper scissors score per the input strategy guide", async () => {
    const guide = await setUpStrategy();
    const testGame = new Game(guide);
    testGame.calculateScores();
    const actual = testGame.playerBTotal;
    const expected = 13675;
    expect(actual).toEqual(expected);
  });
});
