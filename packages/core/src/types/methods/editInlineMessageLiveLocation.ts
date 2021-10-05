import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditInlineMessageLiveLocationParams {
  inlineMessageId?: string // Inline message identifier
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; pass null if none
  location?: LocationInput // New location content of the message; pass null to stop sharing the live location
  heading?: number // The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown
  proximityAlertRadius?: number // The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled
}

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots
 * only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * pass null if none
 * @param {LocationInput} [params.location] - New location content of the message;
 * pass null to stop sharing the live location
 * @param {number} [params.heading] - The new direction in which the location moves,
 * in degrees; 1-360. Pass 0 if unknown
 * @param {number} [params.proximityAlertRadius] - The new maximum distance for proximity
 * alerts, in meters (0-100000). Pass 0 if the notification is disabled
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageLiveLocationParams, OkUnion>>}
 */
export type editInlineMessageLiveLocation = (
  params?: EditInlineMessageLiveLocationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditInlineMessageLiveLocationParams, OkUnion>>
