import { InputPersonalDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's temporary registration */
export class InputPassportElementTemporaryRegistrationBaseModel {
  public _: 'inputPassportElementTemporaryRegistration'
  /** The temporary registration document to be saved */
  public temporaryRegistration: InputPersonalDocument
}
