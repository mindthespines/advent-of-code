import {
  PlayerAChoice,
  PlayerBChoice,
  RoundChoices,
  StrategyGuide,
  RoundScores,
} from "../types";

const pointsByChoice = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

const keyBeatsValueMap = {
  A: "Z",
  X: "C",
  B: "X",
  Y: "A",
  C: "Y",
  Z: "B",
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
  playerAChoice: PlayerAChoice;
  playerBChoice: PlayerBChoice;
  playerAScore = 0;
  playerBScore = 0;

  constructor(roundChoices: RoundChoices) {
    this.playerAChoice = roundChoices[0];
    this.playerBChoice = roundChoices[1];
  }

  playRound(): RoundScores {
    this.assignShapePoints();
    this.assignOutcomePoints();
    return { playerAScore: this.playerAScore, playerBScore: this.playerBScore };
  }

  private assignOutcomePoints() {
    if (keyBeatsValueMap[this.playerAChoice] === this.playerBChoice) {
      this.playerAScore += 6;
    } else if (keyBeatsValueMap[this.playerBChoice] === this.playerAChoice) {
      this.playerBScore += 6;
    } else {
      this.playerAScore += 3;
      this.playerBScore += 3;
    }
  }

  private assignShapePoints() {
    this.playerAScore += pointsByChoice[this.playerAChoice];
    this.playerBScore += pointsByChoice[this.playerBChoice];
  }
}
