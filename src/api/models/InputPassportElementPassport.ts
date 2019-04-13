import { InputIdentityDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's passport */
export class InputPassportElementPassportBaseModel {
  public _: 'inputPassportElementPassport'
  /** The passport to be saved */
  public passport: InputIdentityDocument
}
