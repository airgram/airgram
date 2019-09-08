import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface AddLocalMessageParams {
  chatId?: number // Target chat
  senderUserId?: number // Identifier of the user who will be shown as the sender of the message; may be 0 for channel posts
  replyToMessageId?: number // Identifier of the message to reply to or 0
  disableNotification?: boolean // Pass true to disable notification for the message
  inputMessageContent?: InputMessageContentInputUnion // The content of the message to be added
}

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
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddLocalMessageParams, MessageUnion>>}
 */
export type addLocalMessage<ExtensionT> = (
  params?: AddLocalMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddLocalMessageParams, MessageUnion> & ExtensionT>
