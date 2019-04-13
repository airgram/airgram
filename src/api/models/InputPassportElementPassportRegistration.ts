import { InputPersonalDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's passport registration */
export class InputPassportElementPassportRegistrationBaseModel {
  public _: 'inputPassportElementPassportRegistration'
  /** The passport registration page to be saved */
  public passportRegistration: InputPersonalDocument
}
