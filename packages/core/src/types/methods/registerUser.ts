import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RegisterUserParams {
  firstName?: string // The first name of the user; 1-64 characters
  lastName?: string // The last name of the user; 0-64 characters
}

/**
 * Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration
 * @param {Object} params
 * @param {string} [params.firstName] - The first name of the user; 1-64 characters
 * @param {string} [params.lastName] - The last name of the user; 0-64 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RegisterUserParams, OkUnion>>}
 */
export type registerUser<ExtensionT> = (
  params?: RegisterUserParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RegisterUserParams, OkUnion> & ExtensionT>
