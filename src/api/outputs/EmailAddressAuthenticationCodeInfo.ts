export type EmailAddressAuthenticationCodeInfoUnion = EmailAddressAuthenticationCodeInfo

/** Information about the email address authentication code that was sent */
export interface EmailAddressAuthenticationCodeInfo {
  _: 'emailAddressAuthenticationCodeInfo'
  /** Pattern of the email address to which an authentication code was sent */
  emailAddressPattern: string
  /** Length of the code; 0 if unknown */
  length: number
}
