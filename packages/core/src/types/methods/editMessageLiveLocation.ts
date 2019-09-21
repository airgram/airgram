import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface EditMessageLiveLocationParams {
  chatId?: number // The chat the message belongs to
  messageId?: number // Identifier of the message
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; for bots only
  location?: LocationInput // New location content of the message; may be null. Pass null to stop sharing the live location
}

/**
 * Edits the message content of a live location. Messages can be edited for a limited
 * period of time specified in the live location. Returns the edited message after the
 * edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {LocationInput} [params.location] - New location content of the message;
 * may be null. Pass null to stop sharing the live location
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageLiveLocationParams, MessageUnion>>}
 */
export type editMessageLiveLocation = (
  params?: EditMessageLiveLocationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditMessageLiveLocationParams, MessageUnion>>
