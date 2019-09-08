export type GameHighScoreUnion = GameHighScore

/** Contains one row of the game high score table */
export interface GameHighScore {
  _: 'gameHighScore'
  /** Position in the high score table */
  position: number
  /** User identifier */
  userId: number
  /** User score */
  score: number
}
