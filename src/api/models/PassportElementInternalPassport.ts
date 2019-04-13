import { IdentityDocument } from '../outputs'

/** A Telegram Passport element containing the user's internal passport */
export class PassportElementInternalPassportBaseModel {
  public _: 'passportElementInternalPassport'
  /** Internal passport */
  public internalPassport: IdentityDocument
}
