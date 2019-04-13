import {
  InputPassportElementErrorSourceUnion,
  PassportElementTypeUnion
} from './index'

export type InputPassportElementErrorUnion = InputPassportElementError

/** Contains the description of an error in a Telegram Passport element; for bots only */
export interface InputPassportElementError {
  _: 'inputPassportElementError'
  /** Type of Telegram Passport element that has the error */
  type: PassportElementTypeUnion
  /** Error message */
  message: string
  /** Error source */
  source: InputPassportElementErrorSourceUnion
}
