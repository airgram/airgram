import { MessageUnion } from '../outputs'

/**
 * Updates the game score of the specified user in the game; for bots only
 * @param {Object} params
 * @param {number} [params.chatId] - The chat to which the message with the game
 * @param {number} [params.messageId] - Identifier of the message
 * @param {boolean} [params.editMessage] - True, if the message should be edited
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.score] - The new score
 * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
 * If the score is 0, the user will be deleted from the high score table
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type SetGameScoreMethod = <ResponseT = MessageUnion>(
  params: SetGameScoreParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetGameScoreParams {
  /** The chat to which the message with the game */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** True, if the message should be edited */
  editMessage?: boolean
  /** User identifier */
  userId?: number
  /** The new score */
  score?: number
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  force?: boolean
}
