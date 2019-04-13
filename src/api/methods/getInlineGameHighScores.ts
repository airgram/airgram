import { GameHighScoresUnion } from '../outputs'

/**
 * Returns game high scores and some part of the high score table in the range of the
 * specified user; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {GameHighScoresUnion}
 */
export type GetInlineGameHighScoresMethod = <ResponseT = GameHighScoresUnion>(
  params: GetInlineGameHighScoresParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetInlineGameHighScoresParams {
  /** Inline message identifier */
  inlineMessageId?: string
  /** User identifier */
  userId?: number
}
