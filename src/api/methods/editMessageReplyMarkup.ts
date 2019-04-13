import { ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

/**
 * Edits the message reply markup; for bots only. Returns the edited message after the
 * edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type EditMessageReplyMarkupMethod = <ResponseT = MessageUnion>(
  params: EditMessageReplyMarkupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditMessageReplyMarkupParams {
  /** The chat the message belongs to */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** The new message reply markup */
  replyMarkup?: ReplyMarkupInputUnion
}
