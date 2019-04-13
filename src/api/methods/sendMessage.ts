import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

/**
 * Sends a message. Returns the sent message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of the message to reply
 * to or 0
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the message. Not supported in secret chats
 * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
 * the background
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - Markup for replying to the
 * message; for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - The content
 * of the message to be sent
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type SendMessageMethod = <ResponseT = MessageUnion>(
  params: SendMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendMessageParams {
  /** Target chat */
  chatId?: number
  /** Identifier of the message to reply to or 0 */
  replyToMessageId?: number
  /** Pass true to disable notification for the message. Not supported in secret chats */
  disableNotification?: boolean
  /** Pass true if the message is sent from the background */
  fromBackground?: boolean
  /** Markup for replying to the message; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
  /** The content of the message to be sent */
  inputMessageContent?: InputMessageContentInputUnion
}
