import { ApiRequestOptions, ApiResponse } from '../airgram'
import { GameHighScoresUnion } from '../outputs'

export interface GetInlineGameHighScoresParams {
  inlineMessageId?: string // Inline message identifier
  userId?: number // User identifier
}

/**
 * Returns game high scores and some part of the high score table in the range of the
 * specified user; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetInlineGameHighScoresParams, GameHighScoresUnion>>}
 */
export type getInlineGameHighScores = (
  params?: GetInlineGameHighScoresParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetInlineGameHighScoresParams, GameHighScoresUnion>>
