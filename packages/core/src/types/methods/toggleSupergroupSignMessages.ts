import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSupergroupSignMessagesParams {
  supergroupId?: number // Identifier of the channel
  signMessages?: boolean // New value of sign_messages
}

/**
 * Toggles sender signatures messages sent in a channel; requires can_change_info rights
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the channel
 * @param {boolean} [params.signMessages] - New value of sign_messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSupergroupSignMessagesParams, OkUnion>>}
 */
export type toggleSupergroupSignMessages<ExtensionT> = (
  params?: ToggleSupergroupSignMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSupergroupSignMessagesParams, OkUnion> & ExtensionT>
