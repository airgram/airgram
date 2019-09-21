import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface CreateSupergroupChatParams {
  supergroupId?: number // Supergroup or channel identifier
  force?: boolean // If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect
}

/**
 * Returns an existing chat corresponding to a known supergroup or channel
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup or channel identifier
 * @param {boolean} [params.force] - If true, the chat will be created without network
 * request. In this case all information about the chat except its type, title and photo
 * can be incorrect
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateSupergroupChatParams, ChatUnion>>}
 */
export type createSupergroupChat = (
  params?: CreateSupergroupChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateSupergroupChatParams, ChatUnion>>
