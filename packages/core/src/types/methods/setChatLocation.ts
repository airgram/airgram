import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatLocationInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatLocationParams {
  chatId?: number // Chat identifier
  location?: ChatLocationInput // New location for the chat; must be valid and not null
}

/**
 * Changes the location of a chat. Available only for some location-based supergroups,
 * use supergroupFullInfo.can_set_location to check whether the method is allowed to
 * use
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatLocationInput} [params.location] - New location for the chat; must
 * be valid and not null
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatLocationParams, OkUnion>>}
 */
export type setChatLocation = (
  params?: SetChatLocationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatLocationParams, OkUnion>>
