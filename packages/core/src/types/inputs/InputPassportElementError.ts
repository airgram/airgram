import {
  InputPassportElementErrorSourceInputUnion,
  PassportElementTypeInputUnion
} from './index'

export type InputPassportElementErrorInputUnion = InputPassportElementErrorInput

/** Contains the description of an error in a Telegram Passport element; for bots only */
export interface InputPassportElementErrorInput {
  _: 'inputPassportElementError'
  /** Type of Telegram Passport element that has the error */
  type?: PassportElementTypeInputUnion
  /** Error message */
  message?: string
  /** Error source */
  source?: InputPassportElementErrorSourceInputUnion
}
