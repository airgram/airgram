import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

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
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type EditMessageTextMethod = <ResponseT = MessageUnion>(
  params: EditMessageTextParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditMessageTextParams {
  /** The chat the message belongs to */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** The new message reply markup; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
  /** New text content of the message. Should be of type InputMessageText */
  inputMessageContent?: InputMessageContentInputUnion
}
