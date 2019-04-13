import { InputMessageContentInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

/**
 * Adds a local message to a chat. The message is persistent across application restarts
 * only if the message database is used. Returns the added message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.senderUserId] - Identifier of the user who will be shown
 * as the sender of the message; may be 0 for channel posts
 * @param {number} [params.replyToMessageId] - Identifier of the message to reply
 * to or 0
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the message
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - The content
 * of the message to be added
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type AddLocalMessageMethod = <ResponseT = MessageUnion>(
  params: AddLocalMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddLocalMessageParams {
  /** Target chat */
  chatId?: number
  /**
   * Identifier of the user who will be shown as the sender of the message; may be 0 for
   * channel posts
   */
  senderUserId?: number
  /** Identifier of the message to reply to or 0 */
  replyToMessageId?: number
  /** Pass true to disable notification for the message */
  disableNotification?: boolean
  /** The content of the message to be added */
  inputMessageContent?: InputMessageContentInputUnion
}
