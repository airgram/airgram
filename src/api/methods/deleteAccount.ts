import { OkUnion } from '../outputs'

/**
 * Deletes the account of the current user, deleting all information associated with
 * the user from the server. The phone number of the account can be used to create a
 * new account. Can be called before authorization when the current authorization state
 * is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.reason] - The reason why the account was deleted; optional
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteAccountMethod = <ResponseT = OkUnion>(
  params: DeleteAccountParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteAccountParams {
  /** The reason why the account was deleted; optional */
  reason?: string
}
