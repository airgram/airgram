/** Information about the email address authentication code that was sent */
export class EmailAddressAuthenticationCodeInfoBaseModel {
  public _: 'emailAddressAuthenticationCodeInfo'
  /** Pattern of the email address to which an authentication code was sent */
  public emailAddressPattern: string
  /** Length of the code; 0 if unknown */
  public length: number
}
