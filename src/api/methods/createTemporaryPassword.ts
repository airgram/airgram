import { TemporaryPasswordStateUnion } from '../outputs'

/**
 * Creates a new temporary password for processing payments
 * @param {Object} params
 * @param {string} [params.password] - Persistent user password
 * @param {number} [params.validFor] - Time during which the temporary password will
 * be valid, in seconds; should be between 60 and 86400
 * @param {Object} state
 * @returns {TemporaryPasswordStateUnion}
 */
export type CreateTemporaryPasswordMethod = <ResponseT = TemporaryPasswordStateUnion>(
  params: CreateTemporaryPasswordParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateTemporaryPasswordParams {
  /** Persistent user password */
  password?: string
  /**
   * Time during which the temporary password will be valid, in seconds; should be between
   * 60 and 86400
   */
  validFor?: number
}
