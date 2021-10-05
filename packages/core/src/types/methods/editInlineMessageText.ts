import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditInlineMessageTextParams {
  inlineMessageId?: string // Inline message identifier
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; pass null if none
  inputMessageContent?: InputMessageContentInputUnion // New text content of the message. Must be of type inputMessageText
}

/**
 * Edits the text of an inline text or game message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * pass null if none
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New text
 * content of the message. Must be of type inputMessageText
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageTextParams, OkUnion>>}
 */
export type editInlineMessageText = (
  params?: EditInlineMessageTextParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditInlineMessageTextParams, OkUnion>>
