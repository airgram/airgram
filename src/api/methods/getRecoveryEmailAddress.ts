import { RecoveryEmailAddressUnion } from '../outputs'

/**
 * Returns a recovery email address that was previously set up. This method can be used
 * to verify a password provided by the user
 * @param {Object} params
 * @param {string} [params.password] - The password for the current user
 * @param {Object} state
 * @returns {RecoveryEmailAddressUnion}
 */
export type GetRecoveryEmailAddressMethod = <ResponseT = RecoveryEmailAddressUnion>(
  params: GetRecoveryEmailAddressParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetRecoveryEmailAddressParams {
  /** The password for the current user */
  password?: string
}
