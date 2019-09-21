import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ViewMessagesParams {
  chatId?: number // Chat identifier
  messageIds?: number[] // The identifiers of the messages being viewed
  forceRead?: boolean // True, if messages in closed chats should be marked as read
}

/**
 * Informs TDLib that messages are being viewed by the user. Many useful activities
 * depend on whether the messages are currently being viewed or not (e.g., marking messages
 * as read, incrementing a view counter, updating a view counter, removing deleted messages
 * in supergroups and channels)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.messageIds] - The identifiers of the messages being
 * viewed
 * @param {boolean} [params.forceRead] - True, if messages in closed chats should
 * be marked as read
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ViewMessagesParams, OkUnion>>}
 */
export type viewMessages = (
  params?: ViewMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ViewMessagesParams, OkUnion>>
