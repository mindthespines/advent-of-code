import { Game, Round } from "./day-02";
import { StrategyGuide, RoundStrategy } from "../types";
import { getDay02Data } from "../input-parser/input-parser";

/*
prompt https://adventofcode.com/2022/day/2
*/

async function setUpStrategy() {
  const data = await getDay02Data();
  return data;
}

describe("day 02 tests", () => {
  it("correctly calculates the points earned in a given round", () => {
    const testStrategy: RoundStrategy = ["A", "Y"];
    const round = new Round(testStrategy);
    const actual = round.playRound();
    const expected = { playerAScore: 4, playerBScore: 4 };
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
    const expected = 12;
    expect(actual).toEqual(expected);
  });

  it("calculates my final rock paper scissors score per the input strategy guide", async () => {
    const guide = await setUpStrategy();
    const testGame = new Game(guide);
    testGame.calculateScores();
    const actual = testGame.playerBTotal;
    const expected = 14184;
    expect(actual).toEqual(expected);
  });
});
