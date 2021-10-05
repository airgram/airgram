import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerUnion } from '../outputs'

export interface ClickAnimatedEmojiMessageParams {
  chatId?: number // Chat identifier of the message
  messageId?: number // Identifier of the clicked message
}

/**
 * Informs TDLib that a message with an animated emoji was clicked by the user. Returns
 * a big animated sticker to be played or a 404 error if usual animation needs to be
 * played
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message
 * @param {number} [params.messageId] - Identifier of the clicked message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ClickAnimatedEmojiMessageParams, StickerUnion>>}
 */
export type clickAnimatedEmojiMessage = (
  params?: ClickAnimatedEmojiMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ClickAnimatedEmojiMessageParams, StickerUnion>>
