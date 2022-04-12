/**
 * The link is a link to a user by its phone number. Call searchUserByPhoneNumber with
 * the given phone number to process the link
 */
export class InternalLinkTypeUserPhoneNumberBaseModel {
  public _: 'internalLinkTypeUserPhoneNumber'

  /** Phone number of the user */
  public phoneNumber: string
}
