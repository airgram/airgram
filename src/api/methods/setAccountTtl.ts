import { AccountTtlInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes the period of inactivity after which the account of the current user will
 * automatically be deleted
 * @param {Object} params
 * @param {AccountTtlInput} [params.ttl] - New account TTL
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetAccountTtlMethod = <ResponseT = OkUnion>(
  params: SetAccountTtlParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetAccountTtlParams {
  /** New account TTL */
  ttl?: AccountTtlInput
}
