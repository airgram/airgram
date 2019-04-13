import { InputIdentityDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's internal passport */
export class InputPassportElementInternalPassportBaseModel {
  public _: 'inputPassportElementInternalPassport'
  /** The internal passport to be saved */
  public internalPassport: InputIdentityDocument
}
