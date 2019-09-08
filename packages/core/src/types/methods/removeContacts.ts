import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveContactsParams {
  userIds?: number[] // Identifiers of users to be deleted
}

/**
 * Removes users from the contact list
 * @param {Object} params
 * @param {number[]} [params.userIds] - Identifiers of users to be deleted
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveContactsParams, OkUnion>>}
 */
export type removeContacts<ExtensionT> = (
  params?: RemoveContactsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveContactsParams, OkUnion> & ExtensionT>
