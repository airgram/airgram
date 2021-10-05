/**
 * The link can be used to confirm ownership of a phone number to prevent account deletion.
 * Call sendPhoneNumberConfirmationCode with the given hash and phone number to process
 * the link
 */
export class InternalLinkTypePhoneNumberConfirmationBaseModel {
  public _: 'internalLinkTypePhoneNumberConfirmation'

  /** Hash value from the link */
  public hash: string

  /** Phone number value from the link */
  public phoneNumber: string
}
