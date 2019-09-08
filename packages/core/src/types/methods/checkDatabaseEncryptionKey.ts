import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckDatabaseEncryptionKeyParams {
  encryptionKey?: string // Encryption key to check or set up
}

/**
 * Checks the database encryption key for correctness. Works only when the current authorization
 * state is authorizationStateWaitEncryptionKey
 * @param {Object} params
 * @param {string} [params.encryptionKey] - Encryption key to check or set up
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckDatabaseEncryptionKeyParams, OkUnion>>}
 */
export type checkDatabaseEncryptionKey<ExtensionT> = (
  params?: CheckDatabaseEncryptionKeyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckDatabaseEncryptionKeyParams, OkUnion> & ExtensionT>
