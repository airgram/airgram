/** Describes a user contact */
export class ContactBaseModel {
  public _: 'contact'
  /** Phone number of the user */
  public phoneNumber: string
  /** First name of the user; 1-255 characters in length */
  public firstName: string
  /** Last name of the user */
  public lastName: string
  /** Additional data about the user in a form of vCard; 0-2048 bytes in length */
  public vcard: string
  /** Identifier of the user, if known; otherwise 0 */
  public userId: number
}
