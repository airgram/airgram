import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSendOptionsInput } from '../inputs'
import { MessagesUnion } from '../outputs'

export interface ForwardMessagesParams {
  chatId?: number // Identifier of the chat to which to forward messages
  fromChatId?: number // Identifier of the chat from which to forward messages
  messageIds?: number[] // Identifiers of the messages to forward. Message identifiers must be in a strictly increasing order. At most 100 messages can be forwarded simultaneously
  options?: MessageSendOptionsInput // Options to be used to send the messages; pass null to use default options
  sendCopy?: boolean // Pass true to copy content of the messages without reference to the original sender. Always true if the messages are forwarded to a secret chat or are local
  removeCaption?: boolean // Pass true to remove media captions of message copies. Ignored if send_copy is false
  onlyPreview?: boolean // Pass true to get fake messages instead of actually forwarding them
}

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which to forward messages
 * @param {number} [params.fromChatId] - Identifier of the chat from which to forward
 * messages
 * @param {number[]} [params.messageIds] - Identifiers of the messages to forward.
 * Message identifiers must be in a strictly increasing order. At most 100 messages
 * can be forwarded simultaneously
 * @param {MessageSendOptionsInput} [params.options] - Options to be used to send
 * the messages; pass null to use default options
 * @param {boolean} [params.sendCopy] - Pass true to copy content of the messages
 * without reference to the original sender. Always true if the messages are forwarded
 * to a secret chat or are local
 * @param {boolean} [params.removeCaption] - Pass true to remove media captions of
 * message copies. Ignored if send_copy is false
 * @param {boolean} [params.onlyPreview] - Pass true to get fake messages instead
 * of actually forwarding them
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ForwardMessagesParams, MessagesUnion>>}
 */
export type forwardMessages = (
  params?: ForwardMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ForwardMessagesParams, MessagesUnion>>
