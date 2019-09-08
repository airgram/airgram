import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetUsernameParams {
  username?: string // The new value of the username. Use an empty string to remove the username
}

/**
 * Changes the username of the current user. If something changes, updateUser will be
 * sent
 * @param {Object} params
 * @param {string} [params.username] - The new value of the username. Use an empty
 * string to remove the username
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetUsernameParams, OkUnion>>}
 */
export type setUsername<ExtensionT> = (
  params?: SetUsernameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetUsernameParams, OkUnion> & ExtensionT>
