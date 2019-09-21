import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface StopPollParams {
  chatId?: number // Identifier of the chat to which the poll belongs
  messageId?: number // Identifier of the message containing the poll
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; for bots only
}

/**
 * Stops a poll. A poll in a message can be stopped when the message has can_be_edited
 * flag set
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the poll belongs
 * @param {number} [params.messageId] - Identifier of the message containing the
 * poll
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<StopPollParams, OkUnion>>}
 */
export type stopPoll = (
  params?: StopPollParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<StopPollParams, OkUnion>>
