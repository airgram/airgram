import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface CreateBasicGroupChatParams {
  basicGroupId?: number // Basic group identifier
  force?: boolean // Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect
}

/**
 * Returns an existing chat corresponding to a known basic group
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Basic group identifier
 * @param {boolean} [params.force] - Pass true to create the chat without a network
 * request. In this case all information about the chat except its type, title and photo
 * can be incorrect
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateBasicGroupChatParams, ChatUnion>>}
 */
export type createBasicGroupChat = (
  params?: CreateBasicGroupChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateBasicGroupChatParams, ChatUnion>>
