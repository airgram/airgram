import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ViewMessagesParams {
  chatId?: number // Chat identifier
  messageThreadId?: number // If not 0, a message thread identifier in which the messages are being viewed
  messageIds?: number[] // The identifiers of the messages being viewed
  forceRead?: boolean // True, if messages in closed chats must be marked as read by the request
}

/**
 * Informs TDLib that messages are being viewed by the user. Sponsored messages must
 * be marked as viewed only when the entire text of the message is shown on the screen
 * (excluding the button). Many useful activities depend on whether the messages are
 * currently being viewed or not (e.g., marking messages as read, incrementing a view
 * counter, updating a view counter, removing deleted messages in supergroups and channels)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the messages are being viewed
 * @param {number[]} [params.messageIds] - The identifiers of the messages being
 * viewed
 * @param {boolean} [params.forceRead] - True, if messages in closed chats must be
 * marked as read by the request
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ViewMessagesParams, OkUnion>>}
 */
export type viewMessages = (
  params?: ViewMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ViewMessagesParams, OkUnion>>
