import { FormattedTextInput, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

/**
 * Edits the message content caption. Returns the edited message after the edit is completed
 * on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {FormattedTextInput} [params.caption] - New message content caption; 0-GetOption("message_caption_length_max")
 * characters
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type EditMessageCaptionMethod = <ResponseT = MessageUnion>(
  params: EditMessageCaptionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditMessageCaptionParams {
  /** The chat the message belongs to */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** The new message reply markup; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
}
