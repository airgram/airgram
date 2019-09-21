import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditInlineMessageLiveLocationParams {
  inlineMessageId?: string // Inline message identifier
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup
  location?: LocationInput // New location content of the message; may be null. Pass null to stop sharing the live location
}

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots
 * only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {LocationInput} [params.location] - New location content of the message;
 * may be null. Pass null to stop sharing the live location
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageLiveLocationParams, OkUnion>>}
 */
export type editInlineMessageLiveLocation = (
  params?: EditInlineMessageLiveLocationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditInlineMessageLiveLocationParams, OkUnion>>
