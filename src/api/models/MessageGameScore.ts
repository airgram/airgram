/** A new high score was achieved in a game */
export class MessageGameScoreBaseModel {
  public _: 'messageGameScore'
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  public gameMessageId: number
  /**
   * Identifier of the game, may be different from the games presented in the message
   * with the game
   */
  public gameId: number | string
  /** New score */
  public score: number
}
