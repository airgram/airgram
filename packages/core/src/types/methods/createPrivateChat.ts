import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface CreatePrivateChatParams {
  userId?: number // User identifier
  force?: boolean // Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect
}

/**
 * Returns an existing chat corresponding to a given user
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {boolean} [params.force] - Pass true to create the chat without a network
 * request. In this case all information about the chat except its type, title and photo
 * can be incorrect
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreatePrivateChatParams, ChatUnion>>}
 */
export type createPrivateChat = (
  params?: CreatePrivateChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreatePrivateChatParams, ChatUnion>>
