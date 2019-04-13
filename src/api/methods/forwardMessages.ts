import { MessagesUnion } from '../outputs'

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which to forward messages
 * @param {number} [params.fromChatId] - Identifier of the chat from which to forward
 * messages
 * @param {number[]} [params.messageIds] - Identifiers of the messages to forward
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the message, doesn't work if messages are forwarded to a secret chat
 * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
 * the background
 * @param {boolean} [params.asAlbum] - True, if the messages should be grouped into
 * an album after forwarding. For this to work, no more than 10 messages may be forwarded,
 * and all of them must be photo or video messages
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type ForwardMessagesMethod = <ResponseT = MessagesUnion>(
  params: ForwardMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ForwardMessagesParams {
  /** Identifier of the chat to which to forward messages */
  chatId?: number
  /** Identifier of the chat from which to forward messages */
  fromChatId?: number
  /** Identifiers of the messages to forward */
  messageIds?: number[]
  /**
   * Pass true to disable notification for the message, doesn't work if messages are forwarded
   * to a secret chat
   */
  disableNotification?: boolean
  /** Pass true if the message is sent from the background */
  fromBackground?: boolean
  /**
   * True, if the messages should be grouped into an album after forwarding. For this
   * to work, no more than 10 messages may be forwarded, and all of them must be photo
   * or video messages
   */
  asAlbum?: boolean
}
