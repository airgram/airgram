/** Describes an action associated with a bank card number */
export class BankCardActionOpenUrlBaseModel {
  public _: 'bankCardActionOpenUrl'

  /** Action text */
  public text: string

  /** The URL to be opened */
  public url: string
}
