import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetNameParams {
  firstName?: string // The new value of the first name for the user; 1-64 characters
  lastName?: string // The new value of the optional last name for the user; 0-64 characters
}

/**
 * Changes the first and last name of the current user. If something changes, updateUser
 * will be sent
 * @param {Object} params
 * @param {string} [params.firstName] - The new value of the first name for the user;
 * 1-64 characters
 * @param {string} [params.lastName] - The new value of the optional last name for
 * the user; 0-64 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetNameParams, OkUnion>>}
 */
export type setName<ExtensionT> = (
  params?: SetNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetNameParams, OkUnion> & ExtensionT>
