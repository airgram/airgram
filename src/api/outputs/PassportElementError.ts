import {
  PassportElementErrorSourceUnion,
  PassportElementTypeUnion
} from './index'

export type PassportElementErrorUnion = PassportElementError

/** Contains the description of an error in a Telegram Passport element */
export interface PassportElementError {
  _: 'passportElementError'
  /** Type of the Telegram Passport element which has the error */
  type: PassportElementTypeUnion
  /** Error message */
  message: string
  /** Error source */
  source: PassportElementErrorSourceUnion
}
