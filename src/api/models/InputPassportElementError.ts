import {
  InputPassportElementErrorSourceUnion,
  PassportElementTypeUnion
} from '../outputs'

/** Contains the description of an error in a Telegram Passport element; for bots only */
export class InputPassportElementErrorBaseModel {
  public _: 'inputPassportElementError'
  /** Type of Telegram Passport element that has the error */
  public type: PassportElementTypeUnion
  /** Error message */
  public message: string
  /** Error source */
  public source: InputPassportElementErrorSourceUnion
}
