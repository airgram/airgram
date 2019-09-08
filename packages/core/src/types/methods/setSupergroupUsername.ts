import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetSupergroupUsernameParams {
  supergroupId?: number // Identifier of the supergroup or channel
  username?: string // New value of the username. Use an empty string to remove the username
}

/**
 * Changes the username of a supergroup or channel, requires creator privileges in the
 * supergroup or channel
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {string} [params.username] - New value of the username. Use an empty string
 * to remove the username
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetSupergroupUsernameParams, OkUnion>>}
 */
export type setSupergroupUsername<ExtensionT> = (
  params?: SetSupergroupUsernameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetSupergroupUsernameParams, OkUnion> & ExtensionT>
