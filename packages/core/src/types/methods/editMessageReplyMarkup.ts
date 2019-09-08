import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface EditMessageReplyMarkupParams {
  chatId?: number // The chat the message belongs to
  messageId?: number // Identifier of the message
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup
}

/**
 * Edits the message reply markup; for bots only. Returns the edited message after the
 * edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageReplyMarkupParams, MessageUnion>>}
 */
export type editMessageReplyMarkup<ExtensionT> = (
  params?: EditMessageReplyMarkupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditMessageReplyMarkupParams, MessageUnion> & ExtensionT>
