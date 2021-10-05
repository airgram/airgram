/**
 * Contains information about the period of inactivity after which the current user's
 * account will automatically be deleted
 */
export class AccountTtlBaseModel {
  public _: 'accountTtl'

  /**
   * Number of days of inactivity before the account will be flagged for deletion; 30-366
   * days
   */
  public days: number
}
