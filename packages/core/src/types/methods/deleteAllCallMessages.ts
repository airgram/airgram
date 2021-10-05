import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteAllCallMessagesParams {
  revoke?: boolean // Pass true to delete the messages for all users
}

/**
 * Deletes all call messages
 * @param {Object} params
 * @param {boolean} [params.revoke] - Pass true to delete the messages for all users
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteAllCallMessagesParams, OkUnion>>}
 */
export type deleteAllCallMessages = (
  params?: DeleteAllCallMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteAllCallMessagesParams, OkUnion>>
