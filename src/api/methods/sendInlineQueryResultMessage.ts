import { MessageUnion } from '../outputs'

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always
 * clears a chat draft message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the message. Not supported in secret chats
 * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
 * background
 * @param {number | string} [params.queryId] - Identifier of the inline query
 * @param {string} [params.resultId] - Identifier of the inline result
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type SendInlineQueryResultMessageMethod = <ResponseT = MessageUnion>(
  params: SendInlineQueryResultMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendInlineQueryResultMessageParams {
  /** Target chat */
  chatId?: number
  /** Identifier of a message to reply to or 0 */
  replyToMessageId?: number
  /** Pass true to disable notification for the message. Not supported in secret chats */
  disableNotification?: boolean
  /** Pass true if the message is sent from background */
  fromBackground?: boolean
  /** Identifier of the inline query */
  queryId?: number | string
  /** Identifier of the inline result */
  resultId?: string
}
