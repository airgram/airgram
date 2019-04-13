import {
  PassportElementErrorSourceUnion,
  PassportElementTypeUnion
} from '../outputs'

/** Contains the description of an error in a Telegram Passport element */
export class PassportElementErrorBaseModel {
  public _: 'passportElementError'
  /** Type of the Telegram Passport element which has the error */
  public type: PassportElementTypeUnion
  /** Error message */
  public message: string
  /** Error source */
  public source: PassportElementErrorSourceUnion
}
