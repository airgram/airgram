import { GameHighScoresUnion } from '../outputs'

/**
 * Returns the high scores for a game and some part of the high score table in the range
 * of the specified user; for bots only
 * @param {Object} params
 * @param {number} [params.chatId] - The chat that contains the message with the
 * game
 * @param {number} [params.messageId] - Identifier of the message
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {GameHighScoresUnion}
 */
export type GetGameHighScoresMethod = <ResponseT = GameHighScoresUnion>(
  params: GetGameHighScoresParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetGameHighScoresParams {
  /** The chat that contains the message with the game */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** User identifier */
  userId?: number
}
