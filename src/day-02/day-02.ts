import {
  RoundStrategy,
  StrategyGuide,
  RoundScores,
  Shape,
  Outcome,
} from "../types";

const pointsByShape = {
  [Shape.rock]: 1,
  [Shape.paper]: 2,
  [Shape.scissors]: 3,
};

const shapeNeededForOutcome = {
  [Shape.rock]: {
    [Outcome.lose]: Shape.scissors,
    [Outcome.draw]: Shape.rock,
    [Outcome.win]: Shape.paper,
  },
  [Shape.paper]: {
    [Outcome.lose]: Shape.rock,
    [Outcome.draw]: Shape.paper,
    [Outcome.win]: Shape.scissors,
  },
  [Shape.scissors]: {
    [Outcome.lose]: Shape.paper,
    [Outcome.draw]: Shape.scissors,
    [Outcome.win]: Shape.rock,
  },
};

export class Game {
  strategyGuide: StrategyGuide;
  playerATotal = 0;
  playerBTotal = 0;

  constructor(strategyGuide: StrategyGuide) {
    this.strategyGuide = strategyGuide;
  }

  calculateScores(): void {
    const allRounds = this.strategyGuide.map((round) => new Round(round));
    const allScores = allRounds.map((round) => round.playRound());
    allScores.forEach((score) => {
      this.playerATotal += score.playerAScore;
      this.playerBTotal += score.playerBScore;
    });
  }
}

export class Round {
  playerAChoice: "A" | "B" | "C";
  playerBChoice: "A" | "B" | "C";
  desiredOutcome: "X" | "Y" | "Z";
  playerAScore = 0;
  playerBScore = 0;

  constructor(roundStrategy: RoundStrategy) {
    this.playerAChoice = roundStrategy[0];
    this.desiredOutcome = roundStrategy[1];
    this.playerBChoice =
      shapeNeededForOutcome[this.playerAChoice][this.desiredOutcome];
  }

  playRound(): RoundScores {
    this.assignShapePoints();
    this.assignOutcomePoints();
    return { playerAScore: this.playerAScore, playerBScore: this.playerBScore };
  }

  private assignOutcomePoints() {
    if (this.desiredOutcome === Outcome.lose) {
      this.playerAScore += 6;
    } else if (this.desiredOutcome === Outcome.win) {
      this.playerBScore += 6;
    } else {
      this.playerAScore += 3;
      this.playerBScore += 3;
    }
  }

  private assignShapePoints() {
    this.playerAScore += pointsByShape[this.playerAChoice];
    this.playerBScore += pointsByShape[this.playerBChoice];
  }
}
