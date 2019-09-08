import { PassportElementError, PassportElementUnion } from '@airgram/core'

/** Contains information about a Telegram Passport elements and corresponding errors */
export class PassportElementsWithErrorsBaseModel {
  public _: 'passportElementsWithErrors'

  /** Telegram Passport elements */
  public elements: PassportElementUnion[]

  /** Errors in the elements that are already available */
  public errors: PassportElementError[]
}
