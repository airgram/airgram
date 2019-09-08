import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface CreateNewBasicGroupChatParams {
  userIds?: number[] // Identifiers of users to be added to the basic group
  title?: string // Title of the new basic group; 1-128 characters
}

/**
 * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate.
 * Returns the newly created chat
 * @param {Object} params
 * @param {number[]} [params.userIds] - Identifiers of users to be added to the basic
 * group
 * @param {string} [params.title] - Title of the new basic group; 1-128 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateNewBasicGroupChatParams, ChatUnion>>}
 */
export type createNewBasicGroupChat<ExtensionT> = (
  params?: CreateNewBasicGroupChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateNewBasicGroupChatParams, ChatUnion> & ExtensionT>
