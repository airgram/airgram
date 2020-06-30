import { BankCardActionOpenUrl } from './index'

export type BankCardInfoUnion = BankCardInfo

/** Information about a bank card */
export interface BankCardInfo {
  _: 'bankCardInfo'
  /** Title of the bank card description */
  title: string
  /** Actions that can be done with the bank card number */
  actions: BankCardActionOpenUrl[]
}
