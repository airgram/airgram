import { GameHighScore } from '../outputs'

/** Contains a list of game high scores */
export class GameHighScoresBaseModel {
  public _: 'gameHighScores'
  /** A list of game high scores */
  public scores: GameHighScore[]
}
