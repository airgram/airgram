export type ContactUnion = Contact

/** Describes a user contact */
export interface Contact {
  _: 'contact'
  /** Phone number of the user */
  phoneNumber: string
  /** First name of the user; 1-255 characters in length */
  firstName: string
  /** Last name of the user */
  lastName: string
  /** Additional data about the user in a form of vCard; 0-2048 bytes in length */
  vcard: string
  /** Identifier of the user, if known; otherwise 0 */
  userId: number
}
