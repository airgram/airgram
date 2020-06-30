export type BankCardActionOpenUrlUnion = BankCardActionOpenUrl

/** Describes an action associated with a bank card number */
export interface BankCardActionOpenUrl {
  _: 'bankCardActionOpenUrl'
  /** Action text */
  text: string
  /** The URL to be opened */
  url: string
}
