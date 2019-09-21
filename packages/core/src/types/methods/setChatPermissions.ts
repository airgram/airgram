import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatPermissionsInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatPermissionsParams {
  chatId?: number // Chat identifier
  permissions?: ChatPermissionsInput // New non-administrator members permissions in the chat
}

/**
 * Changes the chat members permissions. Supported only for basic groups and supergroups.
 * Requires can_restrict_members administrator right
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatPermissionsInput} [params.permissions] - New non-administrator members
 * permissions in the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatPermissionsParams, OkUnion>>}
 */
export type setChatPermissions = (
  params?: SetChatPermissionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatPermissionsParams, OkUnion>>
