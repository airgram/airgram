import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditInlineMessageReplyMarkupParams {
  inlineMessageId?: string // Inline message identifier
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup
}

/**
 * Edits the reply markup of an inline message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageReplyMarkupParams, OkUnion>>}
 */
export type editInlineMessageReplyMarkup = (
  params?: EditInlineMessageReplyMarkupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditInlineMessageReplyMarkupParams, OkUnion>>
