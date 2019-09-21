import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface EditMessageTextParams {
  chatId?: number // The chat the message belongs to
  messageId?: number // Identifier of the message
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; for bots only
  inputMessageContent?: InputMessageContentInputUnion // New text content of the message. Should be of type InputMessageText
}

/**
 * Edits the text of a message (or a text of a game message). Returns the edited message
 * after the edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New text
 * content of the message. Should be of type InputMessageText
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageTextParams, MessageUnion>>}
 */
export type editMessageText = (
  params?: EditMessageTextParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditMessageTextParams, MessageUnion>>
