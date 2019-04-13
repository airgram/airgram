import { OkUnion } from '../outputs'

/**
 * Checks the authentication password for correctness. Works only when the current authorization
 * state is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.password] - The password to check
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckAuthenticationPasswordMethod = <ResponseT = OkUnion>(
  params: CheckAuthenticationPasswordParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckAuthenticationPasswordParams {
  /** The password to check */
  password?: string
}
