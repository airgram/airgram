import { InputMessageContentInputUnion } from '../inputs'
import { MessagesUnion } from '../outputs'

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
 * or 0
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * for the messages. Not supported in secret chats
 * @param {boolean} [params.fromBackground] - Pass true if the messages are sent
 * from the background
 * @param {InputMessageContentInputUnion[]} [params.inputMessageContents] - Contents
 * of messages to be sent
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type SendMessageAlbumMethod = <ResponseT = MessagesUnion>(
  params: SendMessageAlbumParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendMessageAlbumParams {
  /** Target chat */
  chatId?: number
  /** Identifier of a message to reply to or 0 */
  replyToMessageId?: number
  /** Pass true to disable notification for the messages. Not supported in secret chats */
  disableNotification?: boolean
  /** Pass true if the messages are sent from the background */
  fromBackground?: boolean
  /** Contents of messages to be sent */
  inputMessageContents?: InputMessageContentInputUnion[]
}
