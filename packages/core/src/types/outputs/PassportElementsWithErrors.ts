import { PassportElementError, PassportElementUnion } from './index'

export type PassportElementsWithErrorsUnion = PassportElementsWithErrors

/** Contains information about a Telegram Passport elements and corresponding errors */
export interface PassportElementsWithErrors {
  _: 'passportElementsWithErrors'
  /** Telegram Passport elements */
  elements: PassportElementUnion[]
  /** Errors in the elements that are already available */
  errors: PassportElementError[]
}
