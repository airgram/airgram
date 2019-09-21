import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteSupergroupParams {
  supergroupId?: number // Identifier of the supergroup or channel
}

/**
 * Deletes a supergroup or channel along with all messages in the corresponding chat.
 * This will release the supergroup or channel username and remove all members; requires
 * creator privileges in the supergroup or channel. Chats with more than 1000 members
 * can't be deleted using this method
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteSupergroupParams, OkUnion>>}
 */
export type deleteSupergroup = (
  params?: DeleteSupergroupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteSupergroupParams, OkUnion>>
