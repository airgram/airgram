import { AccountTtlUnion } from '../outputs'

/**
 * Returns the period of inactivity after which the account of the current user will
 * automatically be deleted
 * @param {Object} state
 * @returns {AccountTtlUnion}
 */
export type GetAccountTtlMethod = <ResponseT = AccountTtlUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
