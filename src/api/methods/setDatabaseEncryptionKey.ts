import { OkUnion } from '../outputs'

/**
 * Changes the database encryption key. Usually the encryption key is never changed
 * and is stored in some OS keychain
 * @param {Object} params
 * @param {string} [params.newEncryptionKey] - New encryption key
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetDatabaseEncryptionKeyMethod = <ResponseT = OkUnion>(
  params: SetDatabaseEncryptionKeyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetDatabaseEncryptionKeyParams {
  /** New encryption key */
  newEncryptionKey?: string
}
