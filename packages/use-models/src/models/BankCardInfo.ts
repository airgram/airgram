import { BankCardActionOpenUrl } from '@airgram/core'

/** Information about a bank card */
export class BankCardInfoBaseModel {
  public _: 'bankCardInfo'

  /** Title of the bank card description */
  public title: string

  /** Actions that can be done with the bank card number */
  public actions: BankCardActionOpenUrl[]
}
