export type AccountTtlInputUnion = AccountTtlInput

/**
 * Contains information about the period of inactivity after which the current user's
 * account will automatically be deleted
 */
export interface AccountTtlInput {
  _: 'accountTtl'
  /**
   * Number of days of inactivity before the account will be flagged for deletion; should
   * range from 30-366 days
   */
  days?: number
}
