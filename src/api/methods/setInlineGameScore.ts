import { OkUnion } from '../outputs'

/**
 * Updates the game score of the specified user in a game; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {boolean} [params.editMessage] - True, if the message should be edited
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.score] - The new score
 * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
 * If the score is 0, the user will be deleted from the high score table
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetInlineGameScoreMethod = <ResponseT = OkUnion>(
  params: SetInlineGameScoreParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetInlineGameScoreParams {
  /** Inline message identifier */
  inlineMessageId?: string
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
