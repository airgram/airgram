import { LocationInput, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

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
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type EditMessageLiveLocationMethod = <ResponseT = MessageUnion>(
  params: EditMessageLiveLocationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditMessageLiveLocationParams {
  /** The chat the message belongs to */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** The new message reply markup; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  location?: LocationInput
}
