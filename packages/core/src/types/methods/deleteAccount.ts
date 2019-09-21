import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteAccountParams {
  reason?: string // The reason why the account was deleted; optional
}

/**
 * Deletes the account of the current user, deleting all information associated with
 * the user from the server. The phone number of the account can be used to create a
 * new account. Can be called before authorization when the current authorization state
 * is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.reason] - The reason why the account was deleted; optional
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteAccountParams, OkUnion>>}
 */
export type deleteAccount = (
  params?: DeleteAccountParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteAccountParams, OkUnion>>
