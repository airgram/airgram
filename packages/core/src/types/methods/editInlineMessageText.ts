import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditInlineMessageTextParams {
  inlineMessageId?: string // Inline message identifier
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup
  inputMessageContent?: InputMessageContentInputUnion // New text content of the message. Should be of type InputMessageText
}

/**
 * Edits the text of an inline text or game message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New text
 * content of the message. Should be of type InputMessageText
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageTextParams, OkUnion>>}
 */
export type editInlineMessageText<ExtensionT> = (
  params?: EditInlineMessageTextParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditInlineMessageTextParams, OkUnion> & ExtensionT>
