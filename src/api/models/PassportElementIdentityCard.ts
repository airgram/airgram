import { IdentityDocument } from '../outputs'

/** A Telegram Passport element containing the user's identity card */
export class PassportElementIdentityCardBaseModel {
  public _: 'passportElementIdentityCard'
  /** Identity card */
  public identityCard: IdentityDocument
}
