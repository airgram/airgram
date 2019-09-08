/** Contains one row of the game high score table */
export class GameHighScoreBaseModel {
  public _: 'gameHighScore'

  /** Position in the high score table */
  public position: number

  /** User identifier */
  public userId: number

  /** User score */
  public score: number
}
