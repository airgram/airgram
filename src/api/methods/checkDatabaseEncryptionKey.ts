import { OkUnion } from '../outputs'

/**
 * Checks the database encryption key for correctness. Works only when the current authorization
 * state is authorizationStateWaitEncryptionKey
 * @param {Object} params
 * @param {string} [params.encryptionKey] - Encryption key to check or set up
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckDatabaseEncryptionKeyMethod = <ResponseT = OkUnion>(
  params: CheckDatabaseEncryptionKeyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckDatabaseEncryptionKeyParams {
  /** Encryption key to check or set up */
  encryptionKey?: string
}
