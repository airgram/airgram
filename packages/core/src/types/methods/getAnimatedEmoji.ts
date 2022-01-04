import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AnimatedEmojiUnion } from '../outputs'

export interface GetAnimatedEmojiParams {
  emoji?: string // The emoji
}

/**
 * Returns an animated emoji corresponding to a given emoji. Returns a 404 error if
 * the emoji has no animated emoji
 * @param {Object} params
 * @param {string} [params.emoji] - The emoji
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetAnimatedEmojiParams, AnimatedEmojiUnion>>}
 */
export type getAnimatedEmoji = (
  params?: GetAnimatedEmojiParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetAnimatedEmojiParams, AnimatedEmojiUnion>>
