import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface EditMessageLiveLocationParams {
  chatId?: number // The chat the message belongs to
  messageId?: number // Identifier of the message
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; pass null if none; for bots only
  location?: LocationInput // New location content of the message; pass null to stop sharing the live location
  heading?: number // The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown
  proximityAlertRadius?: number // The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled
}

/**
 * Edits the message content of a live location. Messages can be edited for a limited
 * period of time specified in the live location. Returns the edited message after the
 * edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * pass null if none; for bots only
 * @param {LocationInput} [params.location] - New location content of the message;
 * pass null to stop sharing the live location
 * @param {number} [params.heading] - The new direction in which the location moves,
 * in degrees; 1-360. Pass 0 if unknown
 * @param {number} [params.proximityAlertRadius] - The new maximum distance for proximity
 * alerts, in meters (0-100000). Pass 0 if the notification is disabled
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageLiveLocationParams, MessageUnion>>}
 */
export type editMessageLiveLocation = (
  params?: EditMessageLiveLocationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditMessageLiveLocationParams, MessageUnion>>
