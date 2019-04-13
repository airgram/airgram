import { LocationInput, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots
 * only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {LocationInput} [params.location] - New location content of the message;
 * may be null. Pass null to stop sharing the live location
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EditInlineMessageLiveLocationMethod = <ResponseT = OkUnion>(
  params: EditInlineMessageLiveLocationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditInlineMessageLiveLocationParams {
  /** Inline message identifier */
  inlineMessageId?: string
  /** The new message reply markup */
  replyMarkup?: ReplyMarkupInputUnion
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  location?: LocationInput
}
