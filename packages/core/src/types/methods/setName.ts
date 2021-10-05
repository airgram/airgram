import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetNameParams {
  firstName?: string // The new value of the first name for the current user; 1-64 characters
  lastName?: string // The new value of the optional last name for the current user; 0-64 characters
}

/**
 * Changes the first and last name of the current user
 * @param {Object} params
 * @param {string} [params.firstName] - The new value of the first name for the current
 * user; 1-64 characters
 * @param {string} [params.lastName] - The new value of the optional last name for
 * the current user; 0-64 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetNameParams, OkUnion>>}
 */
export type setName = (
  params?: SetNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetNameParams, OkUnion>>
